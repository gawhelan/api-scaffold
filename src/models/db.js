const Datastore = require('nedb');
const util = require('util');

const { hashPassword } = require('../services/auth');

function makeStore() {
  const methods = ['update', 'insert', 'find', 'findOne', 'remove'];

  const store = new Datastore();
  methods.forEach(method => {
    store[method] = util.promisify(store[method].bind(store));
  })

  return store;
}

const usersStore = makeStore();

module.exports = {
  usersStore,
}