const db = require("../helpers/db");
const bcrypt = require("bcrypt");

const userModels = {
  getAllUsers: () => {
    return new Promise((resolve, reject) => {
      let query = `SELECT * FROM users`;
      db.query(query, (err, res) => {
        if (!err) {
          resolve(res);
        } else {
          console.log(err);
        }
      });
    });
  },
  postUser: (body) => {
    const { email, password, role } = body;
    return new Promise((resolve, reject) => {
      if (email && password && role) {
        bcrypt.genSalt(10, function (err, salt) {
          //start hash password
          const { password } = body;
          bcrypt.hash(password, salt, function (err, hashedPassword) {
            const newBody = { ...body, password: hashedPassword };
            if (err) {
              reject(err);
            }
            let query = `INSERT INTO users SET ?`;
            db.query(query, newBody, (err, res) => {
              if (!err) {
                resolve(newBody);
              } else {
                reject("Failed to Create User");
              }
            });
          });
        });
      } else {
        reject("Form must be filled correctly");
      }
    });
  },
  updateUser: (params, body) => {
    const { id, email } = params;
    return new Promise((resolve, reject) => {
        console.log(body.password.length)
      if (body.password.length > 0) {
        bcrypt.genSalt(10, function (err, salt) {
          //start hash password
          const { password } = body;
          bcrypt.hash(password, salt, function (err, hashedPassword) {
            const newBody = { ...body, password: hashedPassword };
            if (err) {
              reject(err);
            }
            let query = `UPDATE users SET ? WHERE id=? OR email=?`;
            db.query(query, [newBody, id, email], (err, res) => {
              if (!err) {
                resolve(newBody);
              } else {
                reject("Failed to Create User");
              }
            });
          });
        });
      } else {
        let query = `UPDATE users SET ? WHERE id=? OR email=?`;
        db.query(query, [body, id, email], (err, res) => {
          if (!err) {
            resolve(body);
          } else {
            reject("Failed to Create User");
          }
        });
      }
    });
  },
  deleteUser: (params) => {
    const {id} = params;
    return new Promise((resolve, reject) => {
      let query = `DELETE FROM users WHERE id=?`;
      db.query(query, id, (err, res) => {
        if (!err) {
          resolve(res);
        } else {
          reject("Failed to Update User");
        }
      });
    });
  },
};

module.exports = userModels;
