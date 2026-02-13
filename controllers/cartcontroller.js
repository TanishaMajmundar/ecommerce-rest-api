let cart = [
  { id: 1, productId: 1, quantity: 2 }
];

// GET /cart
exports.getCartItems = (req, res) => {
  res.json(cart);
};

// GET /cart/:id
exports.getCartItemById = (req, res) => {
  const id = parseInt(req.params.id);
  const item = cart.find(c => c.id === id);

  if (!item) {
    return res.status(404).json({ message: 'Cart item not found' });
  }

  res.json(item);
};

// POST /cart
exports.addCartItem = (req, res) => {
  const newItem = {
    id: cart.length + 1,
    productId: req.body.productId,
    quantity: req.body.quantity
  };

  cart.push(newItem);
  res.status(201).json(newItem);
};

// PUT /cart/:id
exports.updateCartItem = (req, res) => {
  const id = parseInt(req.params.id);
  const item = cart.find(c => c.id === id);

  if (!item) {
    return res.status(404).json({ message: 'Cart item not found' });
  }

  item.quantity = req.body.quantity;

  res.json(item);
};

// DELETE /cart/:id
exports.deleteCartItem = (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter(c => c.id !== id);

  res.json({ message: 'Cart item deleted' });
};
