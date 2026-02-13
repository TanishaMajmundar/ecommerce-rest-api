let cart = [
  { id: 1, productId: 1, quantity: 2 },
  { id: 2, productId: 2, quantity: 1 }
];

exports.getCartItems = (req, res) => {
  res.json(cart);
};

exports.getCartItemById = (req, res) => {
  const id = parseInt(req.params.id);
  const item = cart.find(c => c.id === id);
  if (!item) {
    return res.status(404).json({ message: 'Cart item not found' });
  }
  res.json(item);
};

exports.addCartItem = (req, res) => {
  const newItem = {
    id: cart.length + 1,
    productId: req.body.productId,
    quantity: req.body.quantity
  };
  cart.push(newItem);
  res.status(201).json(newItem);
};

exports.updateCartItem = (req, res) => {
  const id = parseInt(req.params.id);
  const item = cart.find(c => c.id === id);
  if (!item) {
    return res.status(404).json({ message: 'Cart item not found' });
  }
  item.quantity = req.body.quantity;
  res.json(item);
};

exports.deleteCartItem = (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter(c => c.id !== id);
  res.json({ message: 'Cart item deleted' });
};
