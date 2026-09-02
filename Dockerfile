# Base image
FROM node:20

# Use the exact yarn version pinned in package.json ("packageManager") via corepack
RUN corepack enable
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

# Set working directory
WORKDIR /usr/src/app

# Copy manifests first so dependency install is a cached layer
# (.yarnrc.yml is required: it sets nodeLinker: node-modules)
COPY package.json yarn.lock .yarnrc.yml ./

# Install dependencies with the lockfile frozen (reproducible builds)
RUN yarn install --immutable

# Copy the rest of the application code
COPY . .

# NEXT_PUBLIC_* variables are inlined into the client bundle at BUILD time,
# so the API endpoint must be passed as a build argument (see docker-compose.yml).
ARG NEXT_PUBLIC_API_ENDPOINT=http://localhost:4000
ENV NEXT_PUBLIC_API_ENDPOINT=$NEXT_PUBLIC_API_ENDPOINT

# Build the Next.js application
RUN yarn build

# Expose the port on which Next.js runs
EXPOSE 3000

# Healthcheck: probe the Next.js server with node's built-in http client
# (no curl/wget dependency). Exit 0 when the app answers with a status < 500.
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:3000/', (r) => process.exit(r.statusCode && r.statusCode < 500 ? 0 : 1)).on('error', () => process.exit(1))"

# Start the Next.js application
CMD ["yarn", "start"]
