FROM node:14.17.3
WORKDIR /app
# ENV NODE_ENV=production|development
COPY  package.json /app/
RUN npm install
