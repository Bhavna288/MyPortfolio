# build environment
FROM node:14.10.1 as build
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install 
RUN npm install bootstrap
COPY . ./
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]