FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
# install react packages 
RUN npm install --silent
RUN npm install yarn
RUN npm clear
RUN yarn run clear 

EXPOSE 3000
# start app 
CMD ["npm", "start"]
