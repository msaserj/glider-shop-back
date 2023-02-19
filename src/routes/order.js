const express = require('express');
const controller = require('../controllers/orderController');
const router = express.Router();

router.get('/', controller.getAllOrders);
router.post('/', controller.createOrder);

module.exports = router;
