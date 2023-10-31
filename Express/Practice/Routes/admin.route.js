import Router from 'express';
const router = Router();

//import { signup, login } from "../controller/auth.controller.js";
import {gettotalcustomers} from "../controller/admin.controller.js";

router.get('/gettotalcustomers', gettotalcustomers)

export default router;