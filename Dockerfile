FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application
COPY . .

# Build the project
RUN npm run build

# Use a lightweight web server to serve the built files
FROM nginx:alpine

# Copy built files to Nginx's default HTML directory
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
