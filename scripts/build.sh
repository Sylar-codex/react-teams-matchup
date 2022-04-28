#!/bin/bash
# script to build and spin up matchups app

# remove existing images if they exist locally 
docker stop matchups 
docker rm matchups

#Build image with name matchups 
docker build -f matchups/Dockerfile matchups/. --no-cache --tag matchups
 
 # Run image with port 3000
docker run --name matchups -p 3000:3000 -d matchups
#docker logs matchups 

echo "go to http://127.0.0.1:3000/ on your local browser to view app"

