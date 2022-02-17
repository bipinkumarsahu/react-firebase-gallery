import React, { useState } from "react";

const UploadForm = () => {
  
  const [file, setFile] = useState(null);
  const [error,setError] = useState(null);
  const types = ['image/png', 'image/jpeg']

  const onUpload = (event) => {
    const selected =event.target.files[0];

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
    <div>
      <form>
        <input type="file" onChange={onUpload} />
        <div className="error">{error}</div>
      </form>
    </div>
  );
};

export default UploadForm;
