# Please DO NOT build the Docker image using this Dockerfile.
# This Dockerfile only work on CodeSandbox.

# Use 'node' image.
FROM node

# Mount '/workspace' for CodeSandbox.
WORKDIR /workspace

# Update the 'PATH' variable for 'npm'.
ENV PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/workspace/node_modules/.bin

# Update the 'apt-get' cache.
RUN apt-get update

# Upgrade all packages on the container.
RUN apt-get upgrade -y

# Disable 'Angular CLI' analytics prompt.
ENV NG_CLI_ANALYTICS=false

# Install 'Angular CLI' version 15.2.8.
RUN npm install -g @angular/cli@15.2.8