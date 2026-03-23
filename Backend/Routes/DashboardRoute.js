import {Router} from 'express';
import { authMiddleware } from '../Middleware/AuthMiddleware.js';
import { getDashboardData } from '../Controllers/DashboardController.js';

const router = Router();
router.get('/dashboard', authMiddleware, getDashboardData);

export default router;