FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install && npm install --global nodemon

CMD nodemon --ext ts,tsx,js,jsx,css,scss --exec "npm run build@dev && npm run start" --watch ./src