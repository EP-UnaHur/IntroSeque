const { User } = require("../db/models");

const getUsers = async (req, res) => {
  const data = await User.findAll({});
  res.status(200).json(data);
};

const getUserById = async (req, res) => {
  const data = await User.findByPk(req.params.id);
  if (data) res.status(200).json(data);
  else res.status(404).json({ message: "Not Found" });
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

const deleteById = async (req, res) => {
  const data = await User.findByPk(req.params.id);
  if (data) {
    const removed = await data.destroy();
    res.status(200).json(removed);
  } else res.status(404).json({ message: "Not Found" });
};

module.exports = { getUsers, getUserById, createUser, deleteById };
