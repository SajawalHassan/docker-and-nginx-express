# Use node version 20 as base image
FROM node:20

# The working dir in image
WORKDIR /app

# Copy code into image
COPY package.json .
COPY public ./public/
COPY server.js .

# Tell docker how to build
RUN npm install

# Expose on which port
EXPOSE 3000

# How to run
CMD [ "npm", "start" ]