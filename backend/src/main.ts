import 'express-async-errors';
import express, { Express } from 'express';
import routes from 'routes/index';
import cors, { CorsOptions } from 'cors';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
// import path from 'path';
import { bodyErrorMiddleware, apiErrorMiddleware } from 'middlewares/error';

config();
const app: Express = express();
const port = process.env.PORT || 5000;

//salva o caminho para a raiz do projeto
// global.__basedir = __dirname;

async function init() {
  try {
    //config parsing middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    //TODO: extrair o middleware pra pasta dele
    app.use(bodyErrorMiddleware);

    // Allows our React application to make HTTP requests to Express application
    const whitelist = ['http://localhost:3000', 'http://192.168.82.228:3000', `http://localhost:${port}`];

    const corsOptions: CorsOptions = {
      origin: (origin, callback) => {
        const originIsWhitelisted = !origin || whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
      },
      methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
      credentials: true,
      preflightContinue: true,
      optionsSuccessStatus: 200
    };
    app.options('*', cors(corsOptions));
    app.use(cors(corsOptions));

    // arq estaticos
    // app.use(express.static(path.join(__dirname, 'public')));

    // middleware for cookies
    app.use(cookieParser());

    // importa todas as rotas
    app.use(routes);

    //add midleware de erro
    app.use(apiErrorMiddleware);

    app.listen(port, () => console.log(`Servidor escutando a porta http://localhost:${port}`));

    // If the Node process ends, close the connection
    // process.on('SIGTERM', getPool.disconnect).on('SIGINT', getPool.disconnect);
  } catch (error) {
    console.log(error);
  }
}

init();
