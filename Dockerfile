FROM node:18-alpine AS BUILD_IMAGE

WORKDIR /app/react-app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


FROM node:18-alpine AS PRODUCTION_IMAGE
WORKDIR /app/react-app

COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/
COPY package.json .
COPY vite.config.js .

RUN npm install typescript

EXPOSE 8080
CMD ["npm", "run", "preview"]