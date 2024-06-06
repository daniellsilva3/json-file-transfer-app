import React, { useState } from 'react';

const FileUpload = () => {
  const [filename, setFilename] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/files', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filename, content }),
    });
    const data = await response.text();
    alert(data);
  };

  return (
    <div>
      <h2>Upload de Arquivo JSON</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do arquivo"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
        />
        <textarea
          placeholder="Conteúdo do arquivo JSON"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FileUpload;
