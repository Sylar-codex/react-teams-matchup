#!/bin/bash
 
docker stop matchups 
docker rm matchups
docker build . --no-cache --tag matchups
 
docker run --name matchups -p 3000:3000 -d matchups
docker logs matchups 