///// create project
npm init -y
npm install express
node index.js


///// create docker file [Dockerfile]
FROM node:lts
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
ENV PORT=8080
CMD [ "node", "index.js" ]


///// create docker file [.dockerignore]
node_modules

///// build docker file to docker image
docker build -t docker-test .


///// build docker image to docker container
docker run --rm -p 8080:8080 docker-test

///// check container id
docker ps -a

///// stop container id
docker stop [container id]

///// leard command docker
docker --help
