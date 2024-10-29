import React, { useState, useRef } from "react";
import './main.css';
import face from './images/images.jpeg';

const Main = () => {
  const [image_url, setImage_url] = useState(null);
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const imagegen = async () => {
    if (inputRef.current.value === '') {
      return;
    }
    setLoading(true);
    const form = new FormData();
    form.append('prompt', inputRef.current.value);
    const response = await fetch('https://clipdrop-api.co/text-to-image/v1', {
      method: 'POST',
      headers: {
        'x-api-key': '687e6a152287400efe9125c8f9e31982e558e8d695b48215a834fa224e112c2a3a83d563f3e504f31c75bcd247ab9a65',
      },
      body: form, 
      size:"350x350"
    });
    const buffer = await response.arrayBuffer();
    const blob = new Blob([buffer], { type: 'image/jpeg' });
    const image_url = URL.createObjectURL(blob);
    setImage_url(image_url);
    setLoading(false);
  }; 
  return ( 
    <section className="container3">
      <div className="desc">
        <h3>AI Image Generator</h3>
        <h4>Generate an image using Generative AI by describing what you want to see, all images are published publicly by default.</h4>
      </div>
      <div className="img-loading">
        <div className="image1">
          {image_url ? <img src={image_url} alt="face" /> : <img src={face} alt="default" />}
        </div>
      </div>
      <div className="loading">
        <div className={loading ? "loading-bar-full" : "loading-bar"}>
          <div className={loading ? "loading-text" : "display-none"}>Loading....</div>
        </div>
      </div>
      {image_url && (
        <div className="download">
          <a href={image_url} download="generated_image.jpg" className="download-link">
            Download Image
          </a>
        </div>
      )}
      <div className="container4">
        <input id="generator-positive" ref={inputRef} className="but" type="text"
          placeholder="What do you want to see?" rows="1"></input>
        <div className="generate-btn" onClick={imagegen}><p>Generate</p></div>
      </div> 
    </section>
  )
}
export default Main;