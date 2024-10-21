import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageDetail from '../components/ImageDetail';

const CategoryPage = () => {
  const { category } = useParams();  // Correção: useParams em vez de props.match.params

  const imagesData = [
    { id: 1, title: 'Natureza 1', category: 'Natureza', src: '/Natureza1.jpg' },
    { id: 2, title: 'Natureza 2', category: 'Natureza', src: '/Natureza2.jpg' },
    { id: 3, title: 'Natureza 3', category: 'Natureza', src: '/Natureza3.jpg' },
    { id: 4, title: 'Natureza 3', category: 'Natureza', src: '/Natureza4.jpg' },
    { id: 5, title: 'Natureza 3', category: 'Natureza', src: '/Natureza5.jpg' },
    { id: 6, title: 'Natureza 3', category: 'Natureza', src: '/Natureza6.jpg' },
    { id: 7, title: 'Natureza 3', category: 'Natureza', src: '/Natureza7.jpg' },
    { id: 8, title: 'Natureza 3', category: 'Natureza', src: '/Natureza8.jpg' },
    { id: 9, title: 'Natureza 3', category: 'Natureza', src: '/Natureza9.jpg' },
    { id: 10, title: 'Natureza 3', category: 'Natureza', src: '/Natureza10.jpg' },
    { id: 11, title: 'Natureza 3', category: 'Natureza', src: '/Natureza11.jpg' },
    { id: 12, title: 'Natureza 3', category: 'Natureza', src: '/Natureza12.jpg' },
    { id: 13, title: 'Natureza 3', category: 'Natureza', src: '/Natureza13.jpg' },
    { id: 14, title: 'Natureza 3', category: 'Natureza', src: '/Natureza14.jpg' },
    { id: 15, title: 'Natureza 3', category: 'Natureza', src: '/Natureza15.jpg' },
    { id: 16, title: 'Tecnologia 1', category: 'Tecnologia', src: '/Tecnologia1.jpg' },
    { id: 17, title: 'Tecnologia 2', category: 'Tecnologia', src: '/Tecnologia2.jpg' },
    { id: 18, title: 'Tecnologia 3', category: 'Tecnologia', src: '/Tecnologia3.jpg' },
    { id: 19, title: 'Tecnologia 3', category: 'Tecnologia', src: '/Tecnologia4.jpg' },
    { id: 20, title: 'Tecnologia 3', category: 'Tecnologia', src: '/Tecnologia5.jpg' },
    { id: 21, title: 'Tecnologia 3', category: 'Tecnologia', src: '/Tecnologia6.jpg' },
    { id: 22, title: 'Tecnologia 3', category: 'Tecnologia', src: '/Tecnologia7.jpg' },
    { id: 23, title: 'Tecnologia 3', category: 'Tecnologia', src: '/Tecnologia8.jpg' },
    { id: 24, title: 'Tecnologia 3', category: 'Tecnologia', src: '/Tecnologia9.jpg' },
    { id: 25, title: 'Tecnologia 3', category: 'Tecnologia', src: '/Tecnologia10.jpg' },
    { id: 26, title: 'Tecnologia 3', category: 'Tecnologia', src: '/Tecnologia11.jpg' },
    { id: 27, title: 'Tecnologia 3', category: 'Tecnologia', src: '/Tecnologia12.jpg' },
    { id: 28, title: 'Tecnologia 3', category: 'Tecnologia', src: '/Tecnologia13.jpg' },
    { id: 29, title: 'Tecnologia 3', category: 'Tecnologia', src: '/Tecnologia14.jpg' },
    { id: 30, title: 'Tecnologia 3', category: 'Tecnologia', src: '/Tecnologia15.jpg' },
    { id: 13, title: 'Animal 1', category: 'Animal', src: '/Animal1.jpg' },
    { id: 14, title: 'Animal 2', category: 'Animal', src: '/Animal2.jpg' },
    { id: 15, title: 'Animal 3', category: 'Animal', src: '/Animal3.jpg' },
    { id: 16, title: 'Animal 3', category: 'Animal', src: '/Animal3.jpg' },
    { id: 17, title: 'Animal 3', category: 'Animal', src: '/Animal3.jpg' },
    { id: 18, title: 'Animal 3', category: 'Animal', src: '/Animal3.jpg' },
  ];

  // Filtra as imagens de acordo com a categoria
  const filteredImages = imagesData.filter((image) => image.category === category);

  return (
    <div>
      <h1>Categoria: {category}</h1>
      <div className="gallery-grid">
        {filteredImages.map((image) => (
          <div key={image.id} className="image-item">
            <Link to={`/image/${image.id}`}>
            <img src={image.src} alt={image.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
