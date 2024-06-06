# Escolher a imagem base do Node.js
FROM node:14

# Criar e definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e instalar as dependências
COPY package*.json ./
RUN npm install

# Copiar o restante da aplicação
COPY . .

# Expor a porta que a aplicação vai usar
EXPOSE 3000

# Definir o comando de inicialização
CMD ["node", "app.js"]
