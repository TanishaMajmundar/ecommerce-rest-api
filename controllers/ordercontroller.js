let orders = [
  { id: 1, userId: 1, total: 70000 },
  { id: 2, userId: 2, total: 20000 }
];

exports.getAllOrders = (req, res) => {
  res.json(orders);
};

exports.getOrderById = (req, res) => {
  const id = parseInt(req.params.id);
  const order = orders.find(o => o.id === id);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  res.json(order);
};

exports.createOrder = (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    userId: req.body.userId,
    total: req.body.total
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
};

exports.updateOrder = (req, res) => {
  const id = parseInt(req.params.id);
  const order = orders.find(o => o.id === id);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  order.total = req.body.total;
  res.json(order);
};

exports.deleteOrder = (req, res) => {
  const id = parseInt(req.params.id);
  orders = orders.filter(o => o.id !== id);
  res.json({ message: 'Order deleted' });
};
