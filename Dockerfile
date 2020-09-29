FROM node:14-slim

LABEL maintainer="filip.adamovic@studierende.htl-donaustadt.at"

# Setting ENV variable
ENV NODE_ENV=production

# Create app directory
WORKDIR /app

# Copy Package.json
COPY alphabot/package*.json ./


# Install app dependencies
RUN npm ci --production

# Bundle app source
COPY ./alphabot .

CMD ["node", "src/server.js"]
