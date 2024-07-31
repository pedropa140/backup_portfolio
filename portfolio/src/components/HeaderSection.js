import React, { useState, useEffect } from 'react';
import './HeaderSection.css';

const images = [
  '/header/image_1.JPG',
  '/header/image_2.JPG',
  '/header/image_3.JPG',
  '/header/image_4.JPG',
  '/header/image_5.JPG',
  '/header/image_6.JPG',
  '/header/image_7.JPG',
  '/header/image_8.JPG',
  '/header/image_9.JPG',
  '/header/image_10.JPG',
  '/header/image_11.JPG',
  '/header/image_12.JPG',
  '/header/image_13.JPG',
  '/header/image_14.JPG',
  '/header/image_15.JPG',
  '/header/image_16.JPG',
  '/header/image_17.JPG'
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
        <h3>SOFTWARE ENGINEERING FELLOW AT HEADSTARTER AI | 5x HACKATHON WINNER</h3>
        <h4>SCROLL FOR MORE INFO<br />&#x2193;</h4>
      </div>
    </section>
  );
}

export default HeaderSection;
