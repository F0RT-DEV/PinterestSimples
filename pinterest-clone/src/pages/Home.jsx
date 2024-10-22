import React, { useState } from 'react';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom'; // Para navegação entre imagens

const imagesNatureza = [
  { id: 1, src: '/Natureza1.jpg' },
  { id: 2, src: '/Natureza2.jpg' },
  { id: 3, src: '/Natureza3.jpg' },
  { id: 4, src: '/Natureza4.jpg' },
  { id: 5, src: '/Natureza5.jpg' },
  { id: 6, src: '/Natureza6.jpg' },
  { id: 7, src: '/Natureza7.jpg' },
  { id: 8, src: '/Natureza8.jpg' },
  { id: 9, src: '/Natureza9.jpg' },
  { id: 10, src: '/Natureza10.jpg' },
  { id: 11, src: '/Natureza11.jpg' },
  { id: 12, src: '/Natureza12.jpg' },
  { id: 13, src: '/Natureza13.jpg' },
  { id: 14, src: '/Natureza14.jpg' },
  { id: 15, src: '/Natureza15.jpg' },
];

const imagesTecnologia = [
  { id: 16, src: '/Tecnologia1.jpg' },
  { id: 17, src: '/Tecnologia2.jpg' },
  { id: 18, src: '/Tecnologia3.jpg' },
  { id: 19, src: '/Tecnologia4.jpg' },
  { id: 20, src: '/Tecnologia5.jpg' },
  { id: 21, src: '/Tecnologia6.jpg' },
  { id: 22, src: '/Tecnologia7.jpg' },
  { id: 23, src: '/Tecnologia8.jpg' },
  { id: 24, src: '/Tecnologia9.jpg' },
  { id: 25, src: '/Tecnologia10.jpg' },
  { id: 26, src: '/Tecnologia11.jpg' },
  { id: 27, src: '/Tecnologia12.jpg' },
  { id: 28, src: '/Tecnologia13.jpg' },
  { id: 29, src: '/Tecnologia14.jpg' },
  { id: 30, src: '/Tecnologia15.jpg' },
];

const imagesAnimal = [
  { id: 31, src: '/Animal1.jpg' },
  { id: 32, src: '/Animal2.jpg' },
  { id: 33, src: '/Animal3.jpg' },
  { id: 34, src: '/Animal4.jpg' },
  { id: 35, src: '/Animal5.jpg' },
  { id: 36, src: '/Animal6.jpg' },
  { id: 37, src: '/Animal7.jpg' },
  { id: 38, src: '/Animal8.jpg' },
  { id: 39, src: '/Animal9.jpg' },
  { id: 40, src: '/Animal10.jpg' },
  { id: 41, src: '/Animal11.jpg' },
  { id: 42, src: '/Animal12.jpg' },
  { id: 43, src: '/Animal13.jpg' },
  { id: 44, src: '/Animal14.jpg' },
  { id: 45, src: '/Animal15.jpg' },
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  // Combina as imagens dos três arrays
  const allImages = [
    ...imagesNatureza,
    ...imagesTecnologia,
    ...imagesAnimal,
  ];

  // Total de páginas baseado na quantidade de imagens
  const totalPages = Math.ceil(allImages.length / imagesPerPage);

  // Imagens da página atual
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = allImages.slice(indexOfFirstImage, indexOfLastImage);

  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Galeria de imagens paginadas */}
      <div className="gallery-grid">
        {currentImages.map((image) => (
          <div key={image.id} className="image-item">
            {/* Envolvendo a imagem com o Link */}
            <Link to={`/image/${image.id}`}>
              <img src={image.src} alt={`Imagem ${image.id}`} />
            </Link>
          </div>
        ))}
      </div>

      {/* Paginação */}
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

export default Home;
