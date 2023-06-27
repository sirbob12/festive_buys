const Order = require('../models/Order');

// Controller action to create a new order
exports.createOrder = async (req, res) => {
  try {
    const { user, products, totalAmount, shippingAddress, paymentMethod } = req.body;
    const order = new Order({
      user,
      products,
      totalAmount,
      shippingAddress,
      paymentMethod
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the order' });
  }
};

// Controller action to get a specific order
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the order' });
  }
};

// Controller action to get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the orders' });
  }
};

// Controller action to update the status of an order

