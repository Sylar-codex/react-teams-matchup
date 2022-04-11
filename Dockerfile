FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
# install react packages 
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent


# start app 
CMD ["npm", "start"]
