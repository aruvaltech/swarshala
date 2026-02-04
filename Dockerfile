# syntax=docker/dockerfile:1

FROM node:20-slim
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=8080
ENV HOSTNAME=0.0.0.0

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

ENV NODE_ENV=production

EXPOSE 8080

CMD ["npm", "run", "start"]
