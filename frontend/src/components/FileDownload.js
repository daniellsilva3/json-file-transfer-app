import React, { useState } from 'react';

const FileDownload = () => {
  const [filename, setFilename] = useState('');
  const [fileContent, setFileContent] = useState(null);

  const handleDownload = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/files/${filename}`);
    if (response.ok) {
      const data = await response.json();
      setFileContent(JSON.stringify(data, null, 2));
    } else {
      alert('Arquivo não encontrado');
    }
  };

  return (
    <div>
      <h2>Download de Arquivo JSON</h2>
      <form onSubmit={handleDownload}>
        <input
          type="text"
          placeholder="Nome do arquivo"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
        />
        <button type="submit">Baixar</button>
      </form>
      {fileContent && (
        <pre>
          <code>{fileContent}</code>
        </pre>
      )}
    </div>
  );
};

export default FileDownload;
