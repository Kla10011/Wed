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
