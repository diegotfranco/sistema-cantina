import { Router, Request, Response, NextFunction } from 'express';
import cliente from './cliente';
import { ApiError } from 'helpers/api-errors';
const router = Router();

router.use('/api/v1/cliente', cliente);

router.use((req: Request, _res: Response, _nxt: NextFunction) => {
  console.log(req.ip, req.url, req.method, req.body);
  throw new ApiError(404, 'página não encontrada');
});

export default router;
