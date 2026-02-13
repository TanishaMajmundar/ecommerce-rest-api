const express = require('express');
const router = express.Router();

const userController = require('../controllers/usercontroller');

function validateUser(req, res, next) {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Invalid user data"
        });
    }

    next();
}

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', validateUser, userController.createUser);
router.put('/:id', validateUser, userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
