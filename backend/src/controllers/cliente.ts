import { Request, Response } from 'express';
// import { genPassword, validPassword, decodeJWT, issueJWT } from 'helpers/utils.ts';

const register = async (req: Request, res: Response) => {
  // verifica se o body não está vazio
  if (!Object.keys(req.body).length)
    return res.status(400).json({ msg: 'solicitação mal construída, informações faltando ou incorretas' });

  // Get a connection from the default pool
  // let conn;
  try {
    // conn = await oracledb.getConnection();

    // const saltHash = genPassword(req.body.senha);
    delete req.body.senha;

    // const sql =
    //   `INSERT INTO TI_USERS(EMAIL, MATRICULA, NOME, HASH, SALT, CODFIL)
    // 	VALUES (:0, :1, :2, :3, :4, :5)`;
    // const result = await conn.execute(sql, [req.body.email.toUpperCase(), req.body.matricula, req.body.nome.toUpperCase(), saltHash.hash, saltHash.salt, req.body.codfil]);

    // if (!result.rowsAffected) throw new Error('algo deu errado.');
    // else {
    //   await conn.commit();
    //   res.status(201).json({ msg: 'login criado com sucesso.' });
    // }
  } catch (err: any) {
    console.log(err);
    // if (err?.errorNum === 1) res.status(409).json({ msg: 'email já cadastrado, aguarde aprovação do seu acesso.' });
    // else res.status(500).json({ msg: `${err}` });
  } finally {
    // await conn.close();
  }
};

// logs the user
const login = async (req: Request, res: Response) => {
  // verifica se o body não está vazio
  if (!req.body?.email || !req.body?.senha)
    return res.status(400).json({ msg: 'solicitação mal construída, informações faltando ou incorretas' });

  // Get a connection from the default pool
  // let conn;
  try {
    // conn = await oracledb.getConnection();
    // let sql =
    //   `SELECT ID, EMAIL, NOME, HASH, SALT, CODFIL, STATUS
    // FROM TI_USERS
    // WHERE
    // 	EMAIL = :0`;
    // const colab = await conn.execute(sql, [req.body.email.toUpperCase()]);
    // sql =
    //   `SELECT ID_ROLE FROM TI_USERS_TO_ROLES WHERE ID_USER = :0`;
    // const roles = await conn.execute(sql, [colab.rows[0]?.ID]);
    // if (!colab?.rows.length) return res.status(401).json({ msg: 'email/senha inválidos!' });
    // const isValid = validPassword(req.body.senha, colab.rows[0].HASH, colab.rows[0].SALT);
    // if (isValid && colab.rows[0].STATUS === 1) {
    //   const tokenObject = issueJWT(colab.rows[0], roles.rows.map((r) => r.ID_ROLE));
    //   res.cookie('jwt', tokenObject.refresh, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    //   res.status(200).json({ email: colab.rows[0].EMAIL.toLowerCase(), token: tokenObject.token });
    // }
    // else
    //   res.status(401).json({ msg: 'login/senha inválidos!' });
  } catch (err) {
    res.status(500).json({ msg: `${err}` });
  } finally {
    // await conn.close();
  }
};

// logs the user
const refresh = async (req: Request, res: Response) => {
  console.log('cookie ', req.cookies);
  if (!req.cookies?.jwt) return res.sendStatus(401);

  // const refreshObject = decodeJWT(req.cookies.jwt);
  // if (!refreshObject) return res.sendStatus(401);

  // Get a connection from the default pool
  // let conn;
  try {
    // conn = await oracledb.getConnection();
    //   let sql =
    //     `SELECT ID, EMAIL, NOME, STATUS, CODFIL
    // 	FROM TI_USERS
    // 	WHERE
    // 		EMAIL = :0`;
    //   const colab = await conn.execute(sql, [refreshObject.email.toUpperCase()]);
    //   if (!colab?.rows.length || colab?.rows[0].STATUS !== 1)
    //     return res.sendStatus(403);
    //   sql =
    //     `SELECT ID_ROLE FROM TI_USERS_TO_ROLES WHERE ID_USER = :0`;
    //   const roles = await conn.execute(sql, [colab.rows[0]?.ID]);
    //   const tokenObject = issueJWT(colab.rows[0], roles.rows.map((r) => r.ID_ROLE));
    //   res.status(200).json({ email: refreshObject.email, token: tokenObject.token });
    // } catch (err) {
    // res.sendStatus(500);
  } finally {
    // await conn.close();
  }
};

const logout = (req: Request, res: Response) => {
  //on client also delete the token

  if (!req.cookies?.jwt) return res.sendStatus(204);

  res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
  res.sendStatus(204);
};

export { register, login, refresh, logout };
