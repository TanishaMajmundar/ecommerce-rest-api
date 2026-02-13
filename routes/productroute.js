const express = require('express');
const router = express.Router();
const productController = require('../controllers/productcontroller');

function validateProduct(req, res, next) {
    const { name, price } = req.body;

    if (!name || typeof price !== 'number') {
        return res.status(400).json({
            message: "Invalid product data"
        });
    }

    next();
}

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', validateProduct, productController.createProduct);
router.put('/:id', validateProduct, productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
