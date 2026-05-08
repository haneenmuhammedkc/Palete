import express from 'express';
import { getOperations, getAnalytics, manageInventory, managePayroll, generateReport } from '../controllers/adminController.js';

const router = express.Router();

router.get('/operations', getOperations);
router.get('/analytics', getAnalytics);
router.post('/inventory', manageInventory);
router.post('/payroll', managePayroll);
router.get('/report', generateReport);

export default router;
