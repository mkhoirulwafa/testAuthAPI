const authModel = require("../models/authModel");
const formResponse = require('../helpers/formResponse')

module.exports = {
  register: (req, res) => {
    authModel
      .register(req.body)
      .then((data) => formResponse(data, res, 201))
      .catch((err) => res.send({
        status: 404,
        message: err
    }));
  },
  login: (req, res) => {
    authModel
      .login(req.body)
      .then((data) => {
        formResponse(data, res, 200)
      })
      .catch((err) => res.send({
          status: 404,
          message: err
      }));
  },
};

//route manggil controller manggil model
//jangan lupa kalo post, model nerima param req.body