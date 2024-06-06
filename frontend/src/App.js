import React from 'react';
import FileUpload from './components/FileUpload';
import FileDownload from './components/FileDownload';

function App() {
  return (
    <div className="App">
      <h1>Transferência de Arquivos JSON</h1>
      <FileUpload />
      <FileDownload />
    </div>
  );
}

export default App;
