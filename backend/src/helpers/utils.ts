import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { jwtSubObject } from 'types/jwt-sub.types';
// import jwt from 'jsonwebtoken';

const PRIV_ACC_KEY = fs.readFileSync(path.join(__dirname, 'id_access_priv.pem'), 'utf8');
const PUB_ACC_KEY = fs.readFileSync(path.join(__dirname, 'id_access_pub.pem'), 'utf8');

const PRIV_RFS_KEY = fs.readFileSync(path.join(__dirname, 'id_refresh_priv.pem'), 'utf8');
const PUB_RFS_KEY = fs.readFileSync(path.join(__dirname, 'id_refresh_pub.pem'), 'utf8');

/**
 * -------------- HELPER FUNCTIONS ----------------
 */

/**
 *
 * @param {*} password - The plain text password
 * @param {*} hash - The hash stored in the database
 * @param {*} salt - The salt stored in the database
 *
 * This function uses the crypto library to decrypt the hash using the salt and then compares
 * the decrypted hash/salt with the password that the user provided at login
 */
function validPassword(password: string, hash: string, salt: string) {
  if (!password) return false;

  const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return hash === hashVerify;
}

/**
 *
 * @param {*} password - The password string that the user inputs to the password field in the register form
 *
 * This function takes a plain text password and creates a salt and hash out of it.  Instead of storing the plaintext
 * password in the database, the salt and hash are stored for security
 *
 * ALTERNATIVE: It would also be acceptable to just use a hashing algorithm to make a hash of the plain text password.
 * You would then store the hashed password in the database and then re-hash it to verify later (similar to what we do here)
 */
function genPassword(password: string) {
  const salt = crypto.randomBytes(32).toString('hex');
  const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

  return {
    salt: salt,
    hash: genHash
  };
}

/**
 * @param {*} user - The user object.  We need this to set the JWT `sub` payload property to the MongoDB user ID
 */
function issueJWT(user: jwtSubObject, roles: string[]) {
  const expiresIn = '8h';
  const expiresRefresh = '1d';
  const usuario = user.nome.split(' ');
  const payload = {
    id: user.id,
    sub:
      usuario[0].charAt(0) +
      usuario[0].slice(1).toLowerCase() +
      ' ' +
      usuario.at(-1)?.charAt(0) +
      usuario.at(-1)?.slice(1).toLowerCase(),
    email: user.email.toLowerCase(),
    codfil: user.codfil,
    roles: roles
  };

  const signedToken = jwt.sign(payload, PRIV_ACC_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });
  const refreshToken = jwt.sign(payload, PRIV_RFS_KEY, { expiresIn: expiresRefresh, algorithm: 'RS256' })

  return {
    token: 'Bearer ' + signedToken,
    expires: expiresIn,
    refresh: refreshToken
  };
}

//fazer a busca pelo nome pra pegar o id e comparar o id no vetor role
function authUserMiddleware(role: string[] | boolean) {
  role ??= false;
  return (req: Request, res: Response, nxt: NextFunction) => {
    if (!req.headers.authorization) return res.status(401).json({ success: false, msg: 'token ausente' });

    const tokenParts = req.headers.authorization.split(' ');
    if (tokenParts[0] === 'Bearer' && /\S+\.\S+\.\S+/.test(tokenParts[1])) {
      jwt.verify(tokenParts[1], PUB_ACC_KEY, { algorithms: ['RS256'] }, async (err: any, decoded: jwtObject) => {
        if (!err) {
          if (role && !decoded.roles.includes(role)) {
            res.status(403).json({ success: false, msg: 'permissão insuficiente' });
          } else {
            req.jwt = decoded;
            nxt();
          }
        } else if (err.name === 'TokenExpiredError') res.status(403).json({ success: false, msg: `${err}` });
        else res.status(401).json({ success: false, msg: `${err}` });
      });
    } else res.status(401).json({ success: false, msg: 'token inválido' });
  };
}

function decodeJWT(token: string) {
  let tokenObject = false;
  if (/\S+\.\S+\.\S+/.test(token)) {
    jwt.verify(token, PUB_RFS_KEY, { algorithms: ['RS256'] }, async (err: any, decoded: jwtObject) => {
      if (!err) {
        tokenObject = decoded;
      }
    });
  }
  return tokenObject;
}

export { validPassword, genPassword, issueJWT, authUserMiddleware, decodeJWT };
