import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams();  // Correção: useParams em vez de props.match.params

  const imagesData = [
    // Exemplos de dados locais
    { id: 1, title: 'Natureza 1', category: 'Natureza', src: '/Natureza1.jpg' },
    { id: 2, title: 'Natureza 2', category: 'Natureza', src: '/Natureza2.jpg' },
    { id: 3, title: 'Natureza 3', category: 'Natureza', src: '/Natureza3.jpg' },
    { id: 4, title: 'Tecnologia 1', category: 'Tecnologia', src: '/Tecnologia1.jpg' },
    { id: 4, title: 'Tecnologia 2', category: 'Tecnologia', src: '/Tecnologia2.jpg' },
    { id: 4, title: 'Tecnologia 3', category: 'Tecnologia', src: '/Tecnologia3.jpg' },
    { id: 4, title: 'Animal 1', category: 'Animal', src: '/Animal1.jpg' },
    { id: 4, title: 'Animal 2', category: 'Animal', src: '/Animal2.jpg' },
    { id: 4, title: 'Animal 3', category: 'Animal', src: '/Animal3.jpg' },
  ];

  // Filtra as imagens de acordo com a categoria
  const filteredImages = imagesData.filter((image) => image.category === category);

  return (
    <div>
      <h1>Categoria: {category}</h1>
      <div className="gallery-grid">
        {filteredImages.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.src} alt={image.title} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
