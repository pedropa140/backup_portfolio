import React, { useState, useEffect } from 'react';
import './HeaderSection.css';

const images = [
  '/images/image_1.JPG',
  '/images/image_2.JPG',
  '/images/image_3.JPG',
  '/images/image_4.JPG',
  '/images/image_5.JPG',
  '/images/image_6.JPG',
  '/images/image_7.JPG',
  '/images/image_8.JPG',
  '/images/image_9.JPG',
  '/images/image_10.JPG',
  '/images/image_11.JPG'
];

function HeaderSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="index-page-middle-header">
      <div className="index-page-middle-header-background">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`background ${index + 1}`}
            className={index === currentImage ? 'active' : ''}
          />
        ))}
      </div>
      <div className="index-page-middle-header-content">
        <h1>PEDRO PAJARILLO JR.</h1>
        <h3>SOFTWARE ENGINEERING FELLOW AT HEADSTARTER AI</h3>
        <h4>SCROLL FOR MORE INFO<br />&#x2193;</h4>
      </div>
    </section>
  );
}

export default HeaderSection;
