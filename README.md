# ieso

A platform for sharing emotions, experiences, and finding help.

## Getting Started

Make sure to have Docker up and running as well and `docker-compose` installed.

Then, the project can be run locally with:
```
docker-compose up
```

In order to rebuild the images, run:
```
docker-compose --build up
```

The website can be found at <http://localhost:3000>

The database can be viewed at <http://localhost:8081>

## Technical Summary

The project consists of a Next.js webapp, a MongoDB database, and a MongoExpress webapp.

The Next.js webapp renders webpages on the server-side and sends the compiled pages to the user. When the user is not requesting a page, but is "interacting" with the site, this is also handled by the Next.js webapp. Currently, the available interactions are "signing in", "registering", "signing out", and "posting". In these cases, the Next.js webapp handles user sessions by giving visitors a JWT token. This, combined with another secret token, allows us to prevent abuse of the webapp's interactive components.

During "registration", users provide a pseudonymous username and a password in order to protect their identity. Passwords are hashed using bcrypt in order to maintain their security, and no password recovery mechanisms are offered, so as to prevent related attacks. The username and password are then stored in the MongoDB database.

During "sign in", users provide a pseudonymous username and a password. The webapp compares the password given to the corresponding hash found in the database, if it exists, in order to validate the user.

During "posting", we currently require users to be "signed in" so as to prevent automated posting through the use of bots. However, this may change once another method of preventing botting is implemented.

The MongoExpress webapp allows developers to explore the data in the MongoDB database.

All of these components are containerized and can be launched with the use of Docker and docker-compose. During deployment, we will likely use a similar docker-compose file to launch the platform on a Columbia provided server.

