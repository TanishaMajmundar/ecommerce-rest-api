let users = [
  { id: 1, name: 'Tanisha', email: 'tanisha@email.com' },
  { id: 2, name: 'Jahanvi', email: 'jahanvi@email.com' }
];

// GET /users
exports.getAllUsers = (req, res) => {
  res.json(users);
};

// GET /users/:id
exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
};

// POST /users
exports.createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// PUT /users/:id
exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.name = req.body.name;
  user.email = req.body.email;

  res.json(user);
};

// DELETE /users/:id
exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);

  res.json({ message: 'User deleted' });
};
