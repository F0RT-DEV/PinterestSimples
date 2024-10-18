import React from 'react';

const ImageDetail = ({ image }) => {

  return (
    <div className="image-detail">
      <h1>{image.title}</h1>
      <img src={image.src} alt={image.title} />
      <p>{image.description}</p>
    </div>
  );
};

export default ImageDetail;