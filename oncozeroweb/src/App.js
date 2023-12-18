import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import medical_image_preview from './assets/medical_image_preview.jpg';

function App() {
  const [selectedFile, setSelectedFile] = useState("");
  const [nonDicomImg, setNonDicomImg] = useState(false);

  const params = useMemo(() => {
    const p = [];
    p["kioskMode"] = false;
    return p;
  }, []);

  useEffect(() => {
    window.papaya.Container.startPapaya();
    window.papaya.Container.resetViewer(0, params);
  }, [params]);

  const handleURLExpired = (e) => {
    e.target.onerror = null; 
    e.target.src = medical_image_preview;
  };

  return (
    <div className="container">
      <div className="content">
        <div id="papaya_viewer" className="papaya" hidden={nonDicomImg}></div>
        {!!selectedFile && !!nonDicomImg && (
          <img
            alt="Medical file preview"
            src={URL.createObjectURL(selectedFile)}
            className="preview-image"
            onError={handleURLExpired}
          />
        )}
      </div>
    </div>
  );
}

export default App;
