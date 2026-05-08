import express from 'express';
import { getMenu, addCategory, addMenuItem, updateMenuItem, deleteMenuItem } from '../controllers/menu.controller.js';

const router = express.Router();

router.get('/', getMenu);
router.post('/category', addCategory);
router.post('/item', addMenuItem);
router.put('/item/:itemId', updateMenuItem);
router.delete('/item/:itemId', deleteMenuItem);

export default router;
