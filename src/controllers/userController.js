const userModel = require("../models/userModel");
const formResponse = require('../helpers/formResponse')

module.exports = {
  getAllUsers: (req, res) => {
    userModel
      .getAllUsers()
      .then((data) => formResponse(data, res, 200))
      .catch((err) => res.send({
        status: 500,
        message: err
    }));
  },
  postUser: (req, res) => {
    userModel
      .postUser(req.body)
      .then((data) => formResponse(data, res, 201))
      .catch((err) => res.send({
        status: 404,
        message: err
    }));
  },
  updateUser: (req, res) => {
    userModel
      .updateUser(req.params, req.body)
      .then((data) => formResponse(data, res, 201))
      .catch((err) => res.send({
        status: 401,
        message: err
    }));
  },
  deleteUser: (req, res) => {
    userModel
      .deleteUser(req.params)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => res.send({
        status: 401,
        message: err
    }));
  },
};

//route manggil controller manggil model