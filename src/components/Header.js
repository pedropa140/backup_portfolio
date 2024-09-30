import React, { useState, useEffect } from 'react';
import './Header.css';

const images = [
  '/Images/Header/image_1.JPG',
  '/Images/Header/image_2.JPG',
  '/Images/Header/image_3.JPG',
  '/Images/Header/image_4.JPG',
  '/Images/Header/image_5.JPG',
  '/Images/Header/image_6.JPG',
  '/Images/Header/image_7.JPG',
  '/Images/Header/image_8.JPG',
  '/Images/Header/image_9.JPG',
  '/Images/Header/image_10.JPG',
  '/Images/Header/image_11.JPG',
  '/Images/Header/image_12.JPG',
  '/Images/Header/image_13.JPG',
  '/Images/Header/image_14.JPG',
  '/Images/Header/image_15.JPG',
  '/Images/Header/image_16.JPG',
  '/Images/Header/image_17.JPG'
];

function Header() {
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
        <h1>Hi, I'm <span style={{color: "#f09a36"}}>PEDRO PAJARILLO JR.</span></h1>
        <h3 style={{color: "#f09a36"}}>Software Developer | Full-Stack Developer | Coder | 5x Hackathon Winner</h3>
      </div>
    </section>
  );
}

export default Header;