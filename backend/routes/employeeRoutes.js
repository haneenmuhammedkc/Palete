import express from 'express';
import { employeeLogin, manageEmployees } from '../controllers/employeeController.js';

const router = express.Router();

router.post('/login', employeeLogin);
router.post('/manage', manageEmployees);

export default router;
