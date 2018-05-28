const { authenticateByToken } = require('../services/auth');
const { findOneByEmail } = require('../models/users');

async function handleGetAuthUserProfile(ctx) {
  const { user } = ctx.state;
  
  if (!user) {
    ctx.throw(401);
    return;
  }

  ctx.status = 200;
  ctx.body = { user };
}

module.exports = {
  handleGetAuthUserProfile,
}