// import the users object we exported in db.js
const users = require('../models/db.js');

module.exports.getAll = function(req, res) {
  res.render('user_template', {
    users: users
  })
}

module.exports.getOne = function(req, res) {
  // TODO send 404 if userID is invalid
  // res.status(404).send(<whatever you want to send>);
  res.render('user_template', {
    users: [users[req.params.userID]]
  });
}
