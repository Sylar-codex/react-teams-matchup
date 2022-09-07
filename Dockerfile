FROM node:alpine
WORKDIR /app

# need to upgrade to Node.js v18.8.0

#copying files and folders into working directory /app
COPY package.json ./
COPY package-lock.json ./
# copy all src, public, and package.json files to container
COPY ./ ./
# install react packages 
RUN npm install --silent && npm install yarn  
# build for production
RUN npm run build 

EXPOSE 3000
# start app 
CMD ["npm", "run", "start"]
