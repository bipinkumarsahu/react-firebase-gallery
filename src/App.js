import React, { useState } from 'react';
import Title from './comps/Title';
import './app.css'
import UploadForm from './comps/uploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';


function App() {

  const[selectedImage,setSelectedImage] = useState(null)

  return (
    <div className=" ui segment container App">
      <Title/>      
      <UploadForm/>

      <br/><br/><br/>
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage&&<Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default App;
