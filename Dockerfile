FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8000

CMD [ "node", "index.js" ]