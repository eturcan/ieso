FROM node:15.3.0-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm install -g nodemon

COPY . .

CMD [ "npm", "run", "start:prod" ]