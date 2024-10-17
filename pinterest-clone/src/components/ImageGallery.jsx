import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePrevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div>
      <div className="gallery-grid">
        {currentImages.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.src} alt={image.title} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Página Anterior</button>
        <button onClick={handleNextPage} disabled={indexOfLastImage >= images.length}>Próxima Página</button>
      </div>
    </div>
  );
};

export default ImageGallery;