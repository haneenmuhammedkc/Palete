import express from 'express';
import { placeOrder, trackOrder, getLiveQueue, updateOrderStatus } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', placeOrder);
router.get('/:orderId', trackOrder);
router.get('/queue/live', getLiveQueue);
router.patch('/:orderId/status', updateOrderStatus);

export default router;
