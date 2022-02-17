import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';


const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

return(<div>
<div className="progress-bar" style={{ width: progress + '%' }} data-percent={progress}> 
  <div className="bar">
    <div className="progress"></div>
  </div>
 
</div>
<br/>
 <div className="fluid label">Uploading File</div>
</div>
  
)
} 

export default ProgressBar;