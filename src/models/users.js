const { usersStore } = require('./db');

async function insertUser(user) {
  return usersStore.insert(user);
}

async function findOneUserByEmail(email) {
  return usersStore.findOne({ email });
}

module.exports = {
  insertUser,
  findOneUserByEmail,
}