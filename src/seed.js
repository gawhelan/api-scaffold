const { hashPassword } = require('./services/auth');
const { insertUser } = require('./models/users');

async function seedDatastores() {
  const users = [
    {
      email: 'joe@example.com',
      name: 'Joe Bloggs',
      password: await hashPassword('password'),
    },
    {
      email: 'jane@example.com',
      name: 'Jane Smith',
      password: await hashPassword('password'),
    },
  ];

  await Promise.all(users.map(insertUser));
};

module.exports = {
  seedDatastores
}
