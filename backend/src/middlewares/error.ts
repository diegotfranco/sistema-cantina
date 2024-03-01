import { Request, Response, NextFunction } from 'express';
import { ApiError } from 'helpers/api-errors';

export const apiErrorMiddleware = (
  err: Error & Partial<ApiError>,
  _req: Request,
  res: Response,
  _nxt: NextFunction
) => {
  console.log(err);
  const code = err.statusCode ?? 500;
  const message = err.message ?? 'Internal server error';
  res.status(code).json({ message });
};

export const bodyErrorMiddleware = (err: any, _req: Request, res: Response, nxt: NextFunction) => {
  const bodyString = err.body as string;

  // error handler for malformed request body
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).send({
      success: false,
      msg: err.message,
      body: bodyString.replaceAll('\r', ' ').replaceAll('\n', ' ').replaceAll('"', "'")
    });
  }
  nxt();
};
