import { Routes } from 'express';
import { userRegistration } from '..controller/user.constroller.js';

const router = Routes();

router.route('/register').post(userRegistration);

export default router