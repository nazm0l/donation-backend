import express from 'express';
import { UserControllers } from './user.controller';
import { loginRateLimiter } from '../../utils/limit';

const router = express.Router();

router.get('/', UserControllers.getUsers);
router.post('/register', UserControllers.createUser);
router.post('/login', loginRateLimiter, UserControllers.loginUser);

export const UserRoutes = router;
