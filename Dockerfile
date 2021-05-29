# build environment
FROM node:14.10.1 as build
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install 
COPY . ./
RUN npm start