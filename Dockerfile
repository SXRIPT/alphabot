FROM node:12-slim

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

# Copy Package.json
COPY package.json ./

# Install app dependencies
RUN npm install


EXPOSE 8080
CMD ["node", "server.js"]