// backend/routes/files.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Rota para obter dados
router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM files WHERE id = ?', [id], (err, results) => {
    if (err) {
      res.status(500).send('Erro ao recuperar o arquivo');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Arquivo não encontrado');
      return;
    }
    res.json(results[0]);
  });
});

// Rota para salvar dados
router.post('/', (req, res) => {
  const { filename, content } = req.body;
  db.query('INSERT INTO files (filename, content) VALUES (?, ?)', [filename, content], (err, results) => {
    if (err) {
      res.status(500).send('Erro ao salvar o arquivo');
      return;
    }
    res.status(201).send('Arquivo salvo com sucesso');
  });
});

module.exports = router;

