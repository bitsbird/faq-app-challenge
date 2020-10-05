FROM node:lts-alpine

WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
RUN npm install chokidar

COPY . /app

EXPOSE 8080

CMD ["npm", "run", "serve"]