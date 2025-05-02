const db = require("../models");
const User = db.user;

// Create
exports.create = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

// Get All
exports.findAll = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

// Get One
exports.findOne = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
};

// Update
exports.update = async (req, res) => {
  await User.update(req.body, { where: { id: req.params.id } });
  res.send("User updated");
};

// Delete
exports.delete = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.send("User deleted");
};
