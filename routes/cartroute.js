const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartcontroller');

function validateCart(req, res, next) {
    const { productId, quantity } = req.body;
    if (!productId || typeof quantity !== 'number') {
        return res.status(400).json({
            message: "Invalid cart data"
        });
    }
    next();
}

router.get('/', cartController.getCartItems);
router.get('/:id', cartController.getCartItemById);
router.post('/', validateCart, cartController.addCartItem);
router.put('/:id', validateCart, cartController.updateCartItem);
router.delete('/:id', cartController.deleteCartItem);

module.exports = router;
