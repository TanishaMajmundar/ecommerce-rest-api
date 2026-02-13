const express = require('express');
const router = express.Router();

const orderController = require('../controllers/ordercontroller');

function validateOrder(req, res, next) {
    const { userId, total } = req.body;
    if (!userId || typeof total !== 'number') {
        return res.status(400).json({
            message: "Invalid order data"
        });
    }
    next();
}

router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);
router.post('/', validateOrder, orderController.createOrder);
router.put('/:id', validateOrder, orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
