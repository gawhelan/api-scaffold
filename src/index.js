const Koa = require('koa');
const jsonBody = require('koa-json-body');

const { seedDatastores } = require('./seed');
const routes = require('./routes');

const port = 3000;

seedDatastores();

const app = new Koa();

app.use(jsonBody({ fallback: true }));
app.use(routes);

app.listen(port);

console.log(`Listening on port http://localhost:${port}`);
