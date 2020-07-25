FROM node:12-slim

# Create app directory
WORKDIR /usr/src/app

# Copy Package.json
COPY package.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD ["node", "server.js"]