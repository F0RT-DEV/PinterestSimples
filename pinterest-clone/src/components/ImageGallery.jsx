import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ImageGallery = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  // Calculando o total de páginas
  const totalPages = Math.ceil(images.length / imagesPerPage);

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
            {/* Envolvendo a imagem com o Link */}
            <Link to={`/image/${image.id}`}>
              <img src={image.src} alt={image.title} />
            </Link>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Página Anterior
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Próxima Página
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;