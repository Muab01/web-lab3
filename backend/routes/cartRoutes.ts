import { Router } from 'express';
import cartController from '../controllers/cartController';

const router = Router()

router.post('/', cartController.createCart)
router.post('/add', cartController.addToCart)
router.get('/:cartId', cartController.getCartItems)

export default router;