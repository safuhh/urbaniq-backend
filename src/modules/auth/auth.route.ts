import { Router } from 'express';
import { registerUser, loginUser, googleAuth, refreshToken, logout } from './auth.controller';

import { validate } from '../../core/middlewares/validate.middleware';
import { registerSchema, loginSchema } from './auth.validation';

const router = Router();

router.post('/register', validate(registerSchema), registerUser);
router.post('/login', validate(loginSchema), loginUser);
router.post('/refresh', refreshToken);
router.post('/logout', logout);
router.post('/google', googleAuth);

export default router;
