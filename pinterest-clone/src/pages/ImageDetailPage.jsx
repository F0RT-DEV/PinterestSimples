import React from 'react';
import { useParams } from 'react-router-dom';
import ImageDetail from '../components/ImageDetail';

const imagesData = [
  { id: 1, title: 'Uma pessoa olhando a montanha verde', description: 'Uma trilha sinuosa serpenteia por um vale verdejante, cercada por colinas suaves. Um céu dramático e nublado paira sobre a paisagem, acrescentando uma sensação de mistério e beleza.', src: '/Natureza1.jpg' },
  
  { id: 2, title: 'Árvore morta olhando o Pôr do Sol', description: 'A imagem mostra um belo pôr do sol sobre um lago. O céu está cheio de nuvens vermelhas e roxas, com o sol se pondo no horizonte. Um único tronco de árvore morto está no primeiro plano do lago, contrastando com o brilho do céu. A água é calma e reflete as cores vibrantes do céu.', src: '/Natureza2.jpg' },

  { id: 3, title: 'Certamente um peixe apreciando à vista', description: 'Uma silhueta de montanhas se eleva acima de um mar calmo com um céu rosa vibrante no fundo. Os reflexos do céu se espalham pelo mar, formando uma tonalidade rosa.', src: '/Natureza3.jpg' },

  { id: 4, title: 'Night City', description: 'Uma cidade futurista com muitos edifícios altos e muitos anúncios brilhantes. No primeiro plano, um grande letreiro vermelho diz "24 horas".', src: '/Tecnologia1.jpg' },

  { id: 5, title: 'Meu setup gamer futuramente', description: 'Uma mesa de escritório à noite com dois monitores com imagens de montanhas, um teclado, um mouse e uma garrafa de cerveja, com fones de ouvido em um alto-falante.', src: '/Tecnologia2.jpg' },

  { id: 6, title: 'Mini-humanos fazendo alguma coisa', description: 'Esta imagem mostra um grande chip de computador com o logotipo da Intel no centro, cercado por vários pequenos personagens. A imagem representa a importância da Intel na tecnologia moderna', src: '/Tecnologia3.jpg' },

  { id: 7, title: 'Ohh Bixinho Bonito', description: 'Um tigre majestoso está deitado na sombra, cercado por plantas verdes exuberantes, calmamente olhando para a frente com seus impressionantes olhos amarelos. A pelagem laranja e preta listrada do tigre se destaca lindamente contra a vegetação.', src: '/Animal1.jpg' },

  { id: 8, title: 'Se achando só porque é o rei da selva', description: 'Um leão majestoso repousa sobre uma grande rocha ao entardecer, sua poderosa presença realçada pelo céu dourado. Com a juba densa e imponente, ele observa com olhar fixo, transmitindo força e tranquilidade. O corpo musculoso está relaxado, mas a postura continua imponente, como se estivesse sempre atento ao seu território', src: '/Animal2.jpg' },

  { id: 9, title: 'Eita, o bixano está bravo', description: 'Uma águia americana está olhando para a câmera com uma expressão séria. As penas brancas de sua cabeça e pescoço contrastam com as penas marrons escuras do seu corpo. O fundo é preto sólido.', src: '/Animal3.jpg' },
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
