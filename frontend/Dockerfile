# Escolher a imagem base do Node.js
FROM node:14

# Criar e definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e instalar as dependências
COPY package*.json ./
RUN npm install

# Copiar o restante da aplicação
COPY . .

# Compilar a aplicação
RUN npm run build

# Instalar o servidor estático
RUN npm install -g serve

# Definir o comando de inicialização
CMD ["serve", "-s", "build"]

# Expor a porta que a aplicação vai usar
EXPOSE 3000
