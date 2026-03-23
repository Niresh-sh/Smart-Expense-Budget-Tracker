import Router from 'express';
import { RegisterController, LoginController, getAllUsers } from '../Controllers/UserController.js';
import { authMiddleware } from '../Middleware/AuthMiddleware.js';

const router = Router();

router.post('/register', RegisterController);
router.post('/login', LoginController);
router.get('/all', getAllUsers);

export default router;