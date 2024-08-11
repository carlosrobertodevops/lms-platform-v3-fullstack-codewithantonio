# Dockerfile.dev
FROM node:20

# Define o diretório de trabalho
WORKDIR /app

# Copia arquivos de dependência e instala dependências
COPY package*.json ./
COPY ./prisma ./prisma

RUN npm install

# Copia o código-fonte
COPY . .

# Exposição da porta 3000
EXPOSE 3000

# Comando padrão para desenvolvimento
CMD ["npm", "run", "dev"]