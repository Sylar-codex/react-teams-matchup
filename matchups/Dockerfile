FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
# install react packages 
RUN npm install yarn
RUN npm install --silent 

EXPOSE 3000
# start app 
CMD ["npm", "start"]
