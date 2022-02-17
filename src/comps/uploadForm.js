import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
const UploadForm = () => {
  
  const [file, setFile] = useState(null);
  const [error,setError] = useState(null);
  const types = ['image/png', 'image/jpeg']

  const onUpload = (event) => {
    const selected = event.target.files[0];

    if(selected&& types.includes(selected.type)){
      setFile(selected)
      setError(null)
    }
    else{
      setError('Please upload png or jpeg files only.')
      setFile(null)
     
    }

  };

  return (
    <div className="ui ">
      <form className="center aligned">
        
        <label className="  circular ui icon button">
        <i className="icon upload"/><input type="file" onChange={onUpload}/></label>
        
        </form>
        
        
        <div className="error">{error}</div>
        { file && <ProgressBar file={file} setFile={setFile} /> }
        
      
    </div>
  );
};

export default UploadForm;
