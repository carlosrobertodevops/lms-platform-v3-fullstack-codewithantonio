# Dockerfile.prod
# Etapa 1: Construção
FROM node:20 AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia arquivos de dependência e instala dependências
COPY package*.json ./
RUN npm install

# Copia o código-fonte
COPY . .

# Constrói o aplicativo
RUN npm run build

# Etapa 2: Servindo a Aplicação
FROM node:18 AS runner

# Define o diretório de trabalho
WORKDIR /app

# Copia os artefatos de construção da etapa anterior
COPY --from=builder /app ./

# Instala apenas dependências de produção
RUN npm ci --omit=dev

# Define a porta de exposição
EXPOSE 3000

# Define o comando para iniciar a aplicação
CMD ["npm", "run", "start"]
