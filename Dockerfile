FROM node:15.9.0-alpine
ENV NODE_ENV=production
ENV NEW_RELIC_NO_CONFIG_FILE=true \
    NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
EXPOSE 4000

CMD [ "npm", "run", "start" ]
