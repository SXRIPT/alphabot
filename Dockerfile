FROM node:12-slim

# Create app directory
WORKDIR /app

# Copy Package.json
COPY alphabot/package.json ./app

# Install app dependencies
RUN npm install

# Bundle app source
COPY ./alphabot .

EXPOSE 8080
CMD ["node", "server.js"]