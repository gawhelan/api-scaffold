async function handleGetPing(ctx) {
  ctx.status = 200;
  ctx.body = 'OK';
}

module.exports = {
  handleGetPing,
}