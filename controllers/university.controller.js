const db = require("../models");
const University = db.university;

exports.create = async (req, res) => {
  const university = await University.create(req.body);
  res.json(university);
};

exports.findAll = async (req, res) => {
  const universities = await University.findAll();
  res.json(universities);
};

exports.findOne = async (req, res) => {
  const university = await University.findByPk(req.params.id);
  res.json(university);
};

exports.update = async (req, res) => {
  await University.update(req.body, { where: { id: req.params.id } });
  res.send("University updated");
};

exports.delete = async (req, res) => {
  await University.destroy({ where: { id: req.params.id } });
  res.send("University deleted");
};