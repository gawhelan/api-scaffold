# API Scaffold

This is a very basic but somewhat structured API scaffold. It provides
examples of authentication using Basic Auth and also JWT access tokens.

## Getting Started

You can install the project dependencies using [`yarn`](https://yarnpkg.com/):

    $ yarn

You can start the API server using the `start` script:

    $ yarn start

By default, the server will be listing on `http://localhost:3000`.

You can also run the server in debug mode using the `start:dev` script:

    $ yarn start:dev


## Example Endpoints

This API defines 3 endpoints:

### `GET /`

Default "ping" endpoint. Unprotected.

    $ curl http://localhost:3000

### `GET /auth/token`

Endpoint for requesting an access token. Requires authentication using a
"Basic Auth" header.

    $ curl http://localhost:3000/auth/token --user jane@example.com:password

### `GET /me`

Endpoint that returns details of the authenticating user. Requires
authentication using a "Bearer Token" header containing a token retrieved
from `/auth/token`.

    $ curl http://localhost:3000/me -H "Authorization: Bearer {{Token from GET /auth/token}}"

## Example Data

The server uses an in-memory database. As such, all data is lost when the
server stops.

To test out the authentication, there are some example users
created everytime the server starts up. Check out the `src/seed.js` file
for details.