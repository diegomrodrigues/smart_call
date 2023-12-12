# Estágio de construção
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN yarn install --production
COPY . .

# Estágio de execução
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["node", "src/app.js"]
