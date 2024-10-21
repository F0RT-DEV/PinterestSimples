import React, { useState } from 'react';
import ImageGallery from '../components/ImageGallery';
import Pagination from '../components/Pagination';

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
  { id: 7, src: '/Tecnologia1.jpg' },
  { id: 8, src: '/Tecnologia2.jpg' },
  { id: 9, src: '/Tecnologia3.jpg' },
  { id: 10, src: '/Tecnologia4.jpg' },
  { id: 11, src: '/Tecnologia5.jpg' },
  { id: 12, src: '/Tecnologia6.jpg' },
];

const imagesAnimal = [
  { id: 13, src: '/Animal1.jpg' },
  { id: 14, src: '/Animal2.jpg' },
  { id: 15, src: '/Animal3.jpg' },
  { id: 16, src: '/Animal4.jpg' },
  { id: 17, src: '/Animal5.jpg' },
  { id: 18, src: '/Animal6.jpg' },
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  // Combina as imagens dos três arrays e mostra 3 de cada
  const allImages = [
    ...imagesNatureza.slice(0, 3),
    ...imagesTecnologia.slice(0, 3),
    ...imagesAnimal.slice(0, 3),
  ];

  // Total de páginas baseado na quantidade de imagens
  const totalPages = Math.ceil(allImages.length / imagesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <ImageGallery images={allImages} />
      <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
    </div>
  );
};

export default Home;