# Stage 1: Build
FROM node:22-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy lockfile and manifest first (layer cache for deps)
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

# Copy the rest of the source
COPY . .

RUN pnpm run build

# Stage 2: Runtime
FROM node:22-alpine AS runtime

WORKDIR /app

# Copy only the standalone output
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

ENV HOST=0.0.0.0
ENV PORT=4321
ENV NODE_ENV=production

EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
