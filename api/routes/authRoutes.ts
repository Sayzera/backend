import express from 'express';
import { login, loginControl, register } from '../controllers/authController';
import { isLogin } from '../services/authService';
const router = express.Router();

// Kullanıcı girişi
router.post('/login', login);

// Kullanıcı giriş kontrolü
router.post('/is-logged-in', loginControl);

// Yeni kullanıcı kaydetme
router.post('/register', register);

export default router;