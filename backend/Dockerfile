FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx medusa build

#FROM node:20-slim AS runtime
#WORKDIR /app
#COPY package*.json ./
#RUN npm ci --omit=dev
#COPY --from=builder /app/.medusa ./.medusa
#COPY --from=builder /app/package*.json ./.medusa/server/
WORKDIR /app/.medusa/server
RUN npm install
COPY ../../.env .env.production
ENV NODE_ENV=production
ENV PORT=9000
ENV HOST=0.0.0.0
EXPOSE 9000

CMD ["npm", "run", "start"]