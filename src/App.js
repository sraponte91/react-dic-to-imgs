import React, { useRef } from 'react';
import './style.css';
import domtoimage from 'dom-to-image';
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from 'react-component-export-image';

export default function App() {
  const downloadRef = useRef();

  const handleDownloadImage = () => {
    const targetEl = downloadRef.current;
    domtoimage.toJpeg(targetEl, { quality: 0.95 }).then((dataUrl) => {
      let link = document.createElement('a');
      link.download = 'my-image-name.jpeg';
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div>
      <div className="container" ref={downloadRef}>
        <h1>Manish Devrani</h1>
        <p>I Like Coding</p>
      </div>
      <button className="download" onClick={handleDownloadImage}>
        Download
      </button>
      <button onClick={() => exportComponentAsPNG(downloadRef)}>
        Convert To PNG
      </button>
    </div>
  );
}
