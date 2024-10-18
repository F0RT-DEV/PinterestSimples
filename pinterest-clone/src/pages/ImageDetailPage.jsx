import React from 'react';
import { useParams } from 'react-router-dom';
import ImageDetail from '../components/ImageDetail';

const imagesData = [
  { id: 1, title: 'Imagem 1', description: 'Uma trilha sinuosa serpenteia por um vale verdejante, cercada por colinas suaves. Um céu dramático e nublado paira sobre a paisagem, acrescentando uma sensação de mistério e beleza.', src: '/Natureza1.jpg' },
  
  { id: 2, title: 'Imagem 2', description: 'Uma silhueta de árvore morta se destaca em um lago sereno com um céu laranja e roxo ao fundo.', src: '/Natureza2.jpg' },

  { id: 3, title: 'Imagem 3', description: 'Uma silhueta de montanhas se eleva acima de um mar calmo com um céu rosa vibrante no fundo. Os reflexos do céu se espalham pelo mar, formando uma tonalidade rosa.', src: '/Natureza3.jpg' },

  { id: 4, title: 'Imagem 4', description: 'Uma cidade futurista com muitos edifícios altos e muitos anúncios brilhantes. No primeiro plano, um grande letreiro vermelho diz "24 horas".', src: '/Tecnologia1.jpg' },

  { id: 5, title: 'Imagem 5', description: 'Uma mesa de escritório à noite com dois monitores com imagens de montanhas, um teclado, um mouse e uma garrafa de cerveja, com fones de ouvido em um alto-falante.', src: '/Tecnologia2.jpg' },

  { id: 6, title: 'Imagem 6', description: 'Esta imagem mostra um grande chip de computador com o logotipo da Intel no centro, cercado por vários pequenos personagens. A imagem representa a importância da Intel na tecnologia moderna', src: '/Tecnologia3.jpg' },

  { id: 7, title: 'Imagem 7', description: 'Um tigre majestoso está deitado na sombra, cercado por plantas verdes exuberantes, calmamente olhando para a frente com seus impressionantes olhos amarelos. A pelagem laranja e preta listrada do tigre se destaca lindamente contra a vegetação.', src: '/Animal1.jpg' },

  { id: 8, title: 'Imagem 8', description: 'Um leão majestoso está deitado em uma rocha, com o sol brilhando atrás dele.', src: '/Animal2.jpg' },

  { id: 9, title: 'Imagem 9', description: 'Uma águia americana está olhando para a câmera com uma expressão séria. As penas brancas de sua cabeça e pescoço contrastam com as penas marrons escuras do seu corpo. O fundo é preto sólido.', src: '/Animal3.jpg' },
];

const ImageDetailPage = () => {
  const { id } = useParams();
  const image = imagesData.find((img) => img.id === parseInt(id));

  return (
    <div className="image-detail">
      <h1>{image.title}</h1>
      <img src={image.src} alt={image.title} />
      <p>{image.description}</p>
    </div>
  );
};

export default ImageDetailPage;
