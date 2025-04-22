const { Rol } = require("../db/models");

const getRoles = async (req, res) => {
  const data = await Rol.findAll({});
  res.status(200).json(data);
};

module.exports = { getRoles };
