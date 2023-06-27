const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to create a new order
router.post('/', orderController.createOrder);

// Route to get a specific order
router.get('/:orderId', orderController.getOrder);

// Route to get all orders
router.get('/', orderController.getAllOrders);

// Route to update the status of an order
router.patch('/:orderId', orderController.updateOrderStatus);

// Route to delete an order
router.delete('/:orderId', orderController.deleteOrder);

module.exports = router;
