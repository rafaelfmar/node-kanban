const mongoose = require('mongoose');

const ListInit = require('../models/List');
const List = mongoose.model('List');

module.exports = {
  async index(req, res) {
    const lists = await List.find();
    return res.render('lists', { title: 'Listas', lists: lists });
  },
  async show(req, res) {
    const list = await List.findById(req.params.id);
    return res.json(list);
  },
  async store(req, res) {
    const list = await List.create(req.body);
    res.send();
  },
  async update(req, res) {
    const list = await List.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(list);
  },
  async destroy(req, res) {
    await List.findByIdAndRemove(req.params.id);
    res.send();
  }
};
