import React from 'react';
import Title from './comps/Title';
import './app.css'
import UploadForm from './comps/uploadForm';


function App() {
  return (
    <div className=" ui segment container App">
      <Title/>      
      <UploadForm/>
    </div>
  );
}

export default App;
