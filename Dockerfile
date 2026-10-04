FROM node:24-bookworm-slim

WORKDIR /app

COPY package.json app.js server.js config.js ./

USER node

EXPOSE 3000

CMD ["node", "server.js"]