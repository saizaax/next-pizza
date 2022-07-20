# Install dependencies
FROM node:17-alpine as dependencies
WORKDIR /next-pizza
COPY package.json package-lock.json* ./
COPY prisma ./prisma/

RUN npm ci
RUN npx prisma generate

# Build
FROM node:17-alpine as builder
WORKDIR /next-pizza

COPY . .
COPY --from=dependencies /next-pizza/node_modules ./node_modules

RUN npm run build

# Run
FROM node:17-alpine as runner
WORKDIR /next-pizza

ENV NODE_ENV production

COPY --from=builder /next-pizza/public ./public
COPY --from=builder /next-pizza/package.json ./package.json
COPY --from=builder /next-pizza/.next ./.next
COPY --from=builder /next-pizza/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "run", "start"]