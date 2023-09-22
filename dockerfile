FROM node:20-slim
WORKDIR /app/
COPY . .
RUN npm i --production
ENTRYPOINT ["node","index.js"]

EXPOSE 3000