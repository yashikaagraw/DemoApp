import Router from 'express';
const router = Router();

import { signup, login } from "../controller/auth.controller.js";

router.get('/login', login);
router.get('/signup', signup);

export default router;
