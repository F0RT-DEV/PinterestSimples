import React from 'react';

const ImageDetail = ({ image }) => {
  if (!image) return <p>Imagem não encontrada</p>;

  return (
    <div className="image-detail">
      <h1>{image.title}</h1>
      <img src={image.src} alt={image.title} style={{ width: '100%', height: 'auto' }} />
      <p>{image.description}</p>
    </div>
  );
};

export default ImageDetail;