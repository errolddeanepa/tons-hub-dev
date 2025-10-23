FROM node:20-slim

# Set the working directory to /app (recommended for Medusa)
WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./

RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Medusa application
RUN npx medusa build

# Copy the .env file to the production build directory
# RUN cp .env.template .medusa/server/.env.production

FROM node:20-slim AS runtime

# Set the working directory to the production build output
WORKDIR /app/.medusa/server

COPY package.json ./

# Install dependencies for the production build
# RUN npm install

RUN npm run predeploy

# Expose the Medusa server port

ENV NODE_ENV=production
ENV PORT=9000
ENV HOST=0.0.0.0
EXPOSE 9000
# Start the Medusa application
CMD ["npm", "run", "start"]
