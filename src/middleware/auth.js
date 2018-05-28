const {
  parseBasicAuthHeader,
  parseBearerTokenHeader,
} = require('../utils');

const {
  authenticateByEmailAndPassword,
  authenticateByToken
} = require('../services/auth');


function requireBasicAuth(options) {
  return async (ctx, next) => {
    const { authorization } = ctx.request.headers;
    const { userid: email, password } = parseBasicAuthHeader(authorization) || {};
    if (!email || !password) {
      ctx.throw(401);
      return;
    }

    const user = await authenticateByEmailAndPassword(email, password);
    if (!user) {
      ctx.throw(401);
      return;
    }

    ctx.state.user = user;

    await next();
  }
}

function requireBearerToken(options) {
  return async (ctx, next) => {
    const { authorization } = ctx.request.headers;    
    const { token } = parseBearerTokenHeader(authorization);

    if (!token) {
      ctx.throw(401);
      return;
    }

    const user = await authenticateByToken(token);
    if (!user) {
      ctx.throw(401);
      return;
    }
  
    ctx.state.user = user;

    await next();
  }
}

module.exports = {
  requireBasicAuth,
  requireBearerToken,
}