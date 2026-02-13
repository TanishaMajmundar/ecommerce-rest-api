const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartcontroller');

router.get('/', cartController.getCartItems);
router.get('/:id', cartController.getCartItemById);
router.post('/', cartController.addCartItem);
router.put('/:id', cartController.updateCartItem);
router.delete('/:id', cartController.deleteCartItem);

module.exports = router;
