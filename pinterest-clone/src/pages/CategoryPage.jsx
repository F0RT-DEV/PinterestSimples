import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ImageDetail from '../components/ImageDetail';

const CategoryPage = () => {
  const { category } = useParams();  // Correção: useParams em vez de props.match.params

  const imagesData = [
    { id: 1, title: 'Natureza 1', category: 'Natureza', src: '/Natureza1.jpg' },
    { id: 2, title: 'Natureza 2', category: 'Natureza', src: '/Natureza2.jpg' },
    { id: 3, title: 'Natureza 3', category: 'Natureza', src: '/Natureza3.jpg' },
    { id: 4, title: 'Tecnologia 1', category: 'Tecnologia', src: '/Tecnologia1.jpg' },
    { id: 5, title: 'Tecnologia 2', category: 'Tecnologia', src: '/Tecnologia2.jpg' },
    { id: 6, title: 'Tecnologia 3', category: 'Tecnologia', src: '/Tecnologia3.jpg' },
    { id: 7, title: 'Animal 1', category: 'Animal', src: '/Animal1.jpg' },
    { id: 8, title: 'Animal 2', category: 'Animal', src: '/Animal2.jpg' },
    { id: 9, title: 'Animal 3', category: 'Animal', src: '/Animal3.jpg' },
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
