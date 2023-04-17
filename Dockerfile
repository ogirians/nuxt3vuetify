# specify the node base image with your desired version node:<version>
FROM node:18.16.0-bullseye
# replace this with your application's default port
# WORKDIR /app

# RUN npx nuxi@latest init my-app

EXPOSE 3000
