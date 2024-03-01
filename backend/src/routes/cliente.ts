import { Router } from 'express';
import * as controller from 'controllers/cliente';
const router = Router();

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/refresh', controller.refresh);
router.get('/logout', controller.logout);

export default router;
