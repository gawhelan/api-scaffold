const BASIC_REGEX = /^\s*Basic\s+([^\s]+)\s*$/;
const BEARER_REGEX = /^\s*Bearer\s+([^\s]+)\s*$/;

function parseBasicAuthHeader(header) {
  if (!header) {
    return null;
  }

  const matches = BASIC_REGEX.exec(header);
  if (!matches) {
    return null;
  }

  const buf = Buffer.from(matches[1], 'base64');
  const [userid, password] = buf.toString().split(':');
  
  return { userid, password };
}

function parseBearerTokenHeader(header) {
  if (!header) {
    return null;
  }

  const matches = BEARER_REGEX.exec(header);
  if (!matches) {
    return null;
  }

  return { token: matches[1] };
}

module.exports = {
  parseBasicAuthHeader,
  parseBearerTokenHeader,
};
