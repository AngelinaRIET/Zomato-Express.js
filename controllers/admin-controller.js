const User = require('../models/User');
const Restaurant = require('../models/Restaurant');

const getAllUsers = (req, res, next) => {
  User.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ users: results });
  });
};

const deleteUser = (req, res, next) => {
  User.delete(req.body, (err) => {
    if (err) return next(err);
    return res.json({ message: 'user deleted' });
  });
};

const editUser = (req, res, next) => {
  User.edit(req.body, (err) => {
    if (err) return next(err);
    res.sendStatus(200);
  });
};

const createRestaurant = (req, res, next) => {
  Restaurant.create(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const getAllRestaurants = (req, res, next) => {
  Restaurant.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ Restaurant: results });
  });
};

const editRestaurant = (req, res, next) => {
  Restaurant.edit(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const deleteRestaurant = (req, res, next) => {
  Restaurant.delete(req.body, (err) => {
    if (err) return next(err);
    return res.json({ message: 'Quiz deleted' });
  });
};

module.exports = {
  getAllUsers,
  deleteUser,
  editUser,

  createRestaurant,
  getAllRestaurants,
  editRestaurant,
  deleteRestaurant,
};
