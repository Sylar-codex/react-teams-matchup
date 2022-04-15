FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
# install react packages 
RUN npm install --silent 


# start app 
CMD ["npm", "start"]
