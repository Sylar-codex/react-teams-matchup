#!/bin/bash#!/bin/bash
docker stop matchups 
docker rm matchups
docker-compose build --no-cache
docker-compose up -d --remove-orphans