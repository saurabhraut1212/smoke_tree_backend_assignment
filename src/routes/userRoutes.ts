import { Router } from 'express';
import { createUserWithAddress } from '../controllers/userController';

const router: Router = Router();

router.post('/users', createUserWithAddress);

export default router;
