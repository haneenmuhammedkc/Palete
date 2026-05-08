import express from 'express';
import { getTableStatus, manageTables } from '../controllers/tableController.js';

const router = express.Router();

router.get('/:tableId', getTableStatus);
router.post('/', manageTables);

export default router;
