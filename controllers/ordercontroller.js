let orders = [
  { id: 1, userId: 1, total: 70000 }
];

// GET /orders
exports.getAllOrders = (req, res) => {
  res.json(orders);
};

// GET /orders/:id
exports.getOrderById = (req, res) => {
  const id = parseInt(req.params.id);
  const order = orders.find(o => o.id === id);

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  res.json(order);
};

// POST /orders
exports.createOrder = (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    userId: req.body.userId,
    total: req.body.total
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
};

// PUT /orders/:id
exports.updateOrder = (req, res) => {
  const id = parseInt(req.params.id);
  const order = orders.find(o => o.id === id);

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  order.total = req.body.total;

  res.json(order);
};

// DELETE /orders/:id
exports.deleteOrder = (req, res) => {
  const id = parseInt(req.params.id);
  orders = orders.filter(o => o.id !== id);

  res.json({ message: 'Order deleted' });
};
