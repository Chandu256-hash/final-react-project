// components/ExampleCarouselImage.js
import React from 'react';

function ExampleCarouselImage({  src, alt }) {
  return (
    <img
     
      src={src}
      alt={alt}
      // style={{ height: '400px', width:"100%" }} 
    />
  );
}

export default ExampleCarouselImage;
