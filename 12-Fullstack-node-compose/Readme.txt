/////clone Folder 12
git clone https://github.com/Kla10011/Wed.git

///// dockerfile backend
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN  npm ci
COPY . .
EXPOSE 5000
CMD [ "npm","start" ]
///// dockerfile frontend
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN  npm ci
COPY . .
RUN  npm run build
CMD [ "npx","serve", "dist" ]

/////check db
docker-compose exec api sh
ping db

******* give up error api-1. can't read db-1
api-1  | CORS-enabled web server listening on port 5000
api-1  | Host =  host.docker.internal
api-1  | Error connecting to the database: Error: Connection lost: The server closed the connection. 