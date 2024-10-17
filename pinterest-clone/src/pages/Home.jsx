import React, { useState } from 'react';
import ImageGallery from '../components/ImageGallery';
import Pagination from '../components/Pagination';

const imagesData = [
    { id: 1, title: 'Imagem 1', description: 'Descrição da imagem 1', src: '/Natureza1.jpg' },
    { id: 2, title: 'Imagem 2', description: 'Descrição da imagem 2', src: '/Natureza2.jpg' },
    { id: 3, title: 'Imagem 3', description: 'Descrição da imagem 3', src: '/Natureza3.jpg' },
    { id: 4, title: 'Imagem 4', description: 'Descrição da imagem 4', src: '/Tecnologia1.jpg' },
    { id: 5, title: 'Imagem 5', description: 'Descrição da imagem 5', src: '/Tecnologia2.jpg' },
    { id: 6, title: 'Imagem 6', description: 'Descrição da imagem 6', src: '/Tecnologia3.jpg' },
    { id: 7, title: 'Imagem 7', description: 'Descrição da imagem 7', src: '/Animal1.jpg' },
    { id: 8, title: 'Imagem 8', description: 'Descrição da imagem 8', src: '/Animal2.jpg' },
    { id: 9, title: 'Imagem 9', description: 'Descrição da imagem 9', src: '/Animal3.jpg' },
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;
  const totalPages = Math.ceil(imagesData.length / imagesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <ImageGallery images={imagesData} />
      <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
    </div>
  );
};

export default Home;