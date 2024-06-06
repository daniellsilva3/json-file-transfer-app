// backend/app.js
const express = require('express');
const fileRoutes = require('./routes/files');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/files', fileRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
