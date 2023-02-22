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

EXPOSE 3010
EXPOSE 80
EXPOSE 27017

CMD [ "node", "index.js" ]