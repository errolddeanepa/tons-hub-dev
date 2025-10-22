FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-slim AS runtime
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app . 

ENV NODE_ENV=production
ENV PORT=9000
ENV HOST=0.0.0.0
EXPOSE 9000

CMD ["npm", "run", "start"]