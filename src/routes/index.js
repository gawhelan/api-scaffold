const Router = require('koa-router');

const {
  requireBasicAuth,
  requireBearerToken
  } = require('../middleware/auth');

const { handleGetPing } = require('../controllers/ping');
const { handleGetToken } = require('../controllers/auth');
const { handleGetAuthUserProfile } = require('../controllers/users');

const router = new Router()
  .get('/', handleGetPing)
  .get('/auth/token', requireBasicAuth(), handleGetToken)
  .get('/me', requireBearerToken(), handleGetAuthUserProfile);

module.exports = router.routes();
