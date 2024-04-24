import React from 'react';

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="image-grid">
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
        {/* Add more images here */}
      </div>
    </div>
  );
};

export default Gallery;
