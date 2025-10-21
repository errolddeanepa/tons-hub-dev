# Use Node.js 20 to match the project's requirements
FROM node:20-slim AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package files from the current directory (which is /backend)
COPY package.json package-lock.json* ./

# Install ALL dependencies
RUN npm ci

# Copy the rest of the source code from the current directory
COPY . .

# Make the startup script executable
# RUN chmod +x ./start.sh

# Run the build command for the server only
#RUN npm run build

# Set the environment to production for the runtime
#ENV NODE_ENV=production

# Tell the container and Render which port we will use. Render will override PORT
# at runtime with its assigned port if necessary.
ENV PORT=9000
# Ensure the app binds to 0.0.0.0 so external requests are accepted
ENV HOST=0.0.0.0

# Expose the port the app will run on
EXPOSE 9000

# Start the application directly (PID 1 will be the node process). Render expects
# the container to listen on $PORT. Medusa reads PORT from process.env.
CMD ["npm", "run", "dev"]