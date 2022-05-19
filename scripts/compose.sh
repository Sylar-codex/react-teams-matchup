#!/bin/bash#!/bin/bash
# script to build and spin up matchups app 
# with docker compose 

# remove existing images if they exist locally 
docker stop matchups matchups-proxy matchups-api matchups-db
docker rm matchups matchups-proxy matchups-api matchups-db 
#docker rm matchups

# build new image 
docker-compose build --no-cache

# run docker image with volumes and ports 
# and remove existing images 
docker-compose up -d --remove-orphans
#docker-compose up -d --remove-orphans
docker ps