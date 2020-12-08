# ieso

ieso is a platform where users can share their emotions and experiences through posts, and receive help in processing them.
          
Posts not only help users come to terms with their difficult life experiences but also help social workers identify how to best assist individuals in processing their emotions. In addition, content contributed to the platform helps fuel Natural Language Processing research on identifying states of distress.
          
Posting is done pseudonymously in order to protect users' identities. When creating a post, users are prompted to fill out a form in order to collect first-hand information regarding the users' emotional state similar to an Ecological Momentary Assessment. This ultimately allows social workers and NLP researchers to understand participants' qualitative descriptions of their emotions and experiences more holistically.

When users make posts, they are vetted by volunteer student social workers before being displayed either publically or privately. Posts are always able to receive replies from student social workers, but public posts are also visible to and open to interaction from other users of the site.

Users are also given the option to receive a follow-up from a student social worker. In this case, they will receive a notification through the site that a student social worker is reaching out to them for further contact. At this point, users will be given the option of discussing with the student social worker over a voice or video call.

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

