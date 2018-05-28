const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { findOneUserByEmail } = require('../models/users')

const TOKEN_SECRET = '#KHujn5*6$zt*r9@FqUr8mchXnbQHD4?'

async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

async function createToken(user) {
  return jwt.sign(
    { email: user.email, name: user.name },
    TOKEN_SECRET,
    { expiresIn: '2 days' }
  );
}

async function verifyUserPassword(user, password) {
  if (!user || !user.password) {
    return false;
  }

  return bcrypt.compare(password, user.password);
}

async function authenticateByEmailAndPassword(email, password) {
  if (!email || !password) {
    return null;
  }

  const user = await findOneUserByEmail(email);
  if (!await verifyUserPassword(user, password)) {
    return null;
  }

  return user;
}

async function authenticateByToken(token) {
  try {
    const { email, name } = await jwt.verify(token, TOKEN_SECRET);
    return { email, name };
  } catch (err) {
    return null;
  }
}

module.exports = {
  hashPassword,
  createToken,
  authenticateByEmailAndPassword,
  authenticateByToken,
}