const faker = require('faker');

let users = [];
const NO_OF_USERS = 10;

for (let i=0; i<NO_OF_USERS; i++) {
  let user = {};
  user.firstName = faker.name.firstName();
  user.lastName = faker.name.lastName();
  user.email = faker.internet.email();

  users.push(user);
}

// export the "users" object
// by default, module.exports is an empty object ({})
// you can choose to add key-value pairs to it instead
// of overwritting it

module.exports = users;
// module.exports.users = users;
  // also works, but when importing, do this instead (app.js):
  // let users = require('./models/db.js').users;
