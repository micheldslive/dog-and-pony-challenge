FROM node:16-alpine

WORKDIR /dog-and-pony

COPY . .

RUN yarn
