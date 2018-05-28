const usersModel = require('../models/users.js');
const { createToken, authenticateByEmailAndPassword } = require('../services/auth');

async function handleGetToken(ctx) {
  const { user } = ctx.state;
  if (!user) {
    ctx.throw(401);
    return;
  }

  const token = await createToken(user);

  ctx.status = 200;
  ctx.body = { token };
}

module.exports = {
  handleGetToken,
};
