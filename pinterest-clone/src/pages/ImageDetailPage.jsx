import React from 'react';
import { useParams } from 'react-router-dom';
import ImageDetail from '../components/ImageDetail';

const imagesData = [
  { id: 1, title: 'Uma pessoa olhando a montanha verde', description: 'Uma trilha sinuosa serpenteia por um vale verdejante, cercada por colinas suaves. Um céu dramático e nublado paira sobre a paisagem, acrescentando uma sensação de mistério e beleza.', src: '/Natureza1.jpg' },
  { id: 2, title: 'Árvore morta olhando o Pôr do Sol', description: 'A imagem mostra um belo pôr do sol sobre um lago. O céu está cheio de nuvens vermelhas e roxas, com o sol se pondo no horizonte. Um único tronco de árvore morto está no primeiro plano do lago, contrastando com o brilho do céu. A água é calma e reflete as cores vibrantes do céu.', src: '/Natureza2.jpg' },
  { id: 3, title: 'Certamente um peixe apreciando à vista', description: 'Uma silhueta de montanhas se eleva acima de um mar calmo com um céu rosa vibrante no fundo. Os reflexos do céu se espalham pelo mar, formando uma tonalidade rosa.', src: '/Natureza3.jpg' },
  { id: 4, title: 'Calma nas Rochas', description: 'Uma vista tranquila da costa com água azul e rochas ao primeiro plano, o céu azul com nuvens brancas e uma costa arborizada no fundo.', src: '/Natureza4.jpg' },
  { id: 5, title: 'Reflexos de Picos Montanhosos', description: 'Uma imagem de uma lagoa tranquila refletida em picos montanhosos cobertos de árvores. O céu é azul e sem nuvens e o sol está brilhando.', src: '/Natureza5.jpg' },
  { id: 6, title: 'Reflexo tranquilo', description: 'Um lago tranquilo cercado por montanhas cobertas de neve e floresta de outono. Um tronco de árvore caído fica na margem do lago.', src: '/Natureza6.jpg' },
  { id: 7, title: 'Paz no Lago', description: 'Um tranquilo lago cercado por árvores e um arco de pedra que convida a um passeio sereno. O céu azul e as nuvens fofas criam um cenário mágico e relaxante.', src: '/Natureza7.jpg' },
  { id: 8, title: 'Amanhecer Outonal', description: 'Um amanhecer dourado ilumina uma floresta outonal, com tons quentes de vermelho, laranja e amarelo, e uma névoa suave que paira sobre o campo. A luz do sol brilha através das árvores e cria um clima tranquilo e mágico.', src: '/Natureza8.jpg' },
  { id: 9, title: 'Reflexo de inverno', description: 'Uma vista serena de um rio congelado, com montanhas cobertas de neve e árvores refletindo nas águas calmas. A névoa suave e o céu azul criam uma atmosfera mágica.', src: '/Natureza9.jpg' },
  { id: 10, title: 'Um Novo Amanhecer', description: 'A imagem mostra um planeta azul e uma superfície de nuvens douradas que sugerem um novo amanhecer. Um rio sinuoso serpenteia através de um terreno montanhoso, mostrando uma beleza e mistério extraterrestres. A luz do sol ilumina o céu enquanto o planeta azul se destaca no fundo escuro', src: '/Natureza10.jpg' },
  { id: 11, title: 'Pôr do Sol na Costa', description: 'A costa rochosa sob um céu vibrante de pôr do sol. O mar se estende até o horizonte, e a água se acumula em poças ao redor das rochas, refletindo as cores do céu.', src: '/Natureza11.jpg' },
  { id: 12, title: 'Foca Relaxando no Gelo', description: 'Uma foca relaxa em um iceberg no oceano azul cristalino, com montanhas nevadas ao fundo. O céu azul e o brilho do sol criam um contraste impressionante com o gelo branco.', src: '/Natureza12.jpg' },
  { id: 13, title: 'Amanhecer sobre o Vale', description: 'Uma névoa espessa e escura envolve um vale, com picos rochosos que se erguem do céu. Os raios de sol brilhantes rompem as nuvens, pintando o céu em tons de rosa e roxo.', src: '/Natureza13.jpg' },
  { id: 14, title: 'Montanhas Cobertas de Musgo', description: 'Uma imagem de uma paisagem montanhosa coberta por musgo verde vibrante. No primeiro plano, vários pedaços de rocha cobertos por musgo contrastam com as montanhas distantes, criando uma atmosfera pacífica e calma.', src: '/Natureza14.jpg' },
  { id: 15, title: 'A Montanha Dourada.', description: 'Uma montanha imponente e isolada que se ergue sobre um fundo de céu azul e nuvens fofas. A montanha tem um tom dourado, dando a impressão de que ela está brilhando. A areia na praia parece preta como breu, contrastando com o tom dourado da montanha e com as plantas que aparecem na praia.', src: '/Natureza15.jpg' },

  { id: 16, title: 'Night City', description: 'Uma cidade futurista com muitos edifícios altos e muitos anúncios brilhantes. No primeiro plano, um grande letreiro vermelho diz "24 horas".', src: '/Tecnologia1.jpg' },
  { id: 17, title: 'Meu setup gamer futuramente', description: 'Uma mesa de escritório à noite com dois monitores com imagens de montanhas, um teclado, um mouse e uma garrafa de cerveja, com fones de ouvido em um alto-falante.', src: '/Tecnologia2.jpg' },
  { id: 18, title: 'Mini-humanos fazendo alguma coisa', description: 'Esta imagem mostra um grande chip de computador com o logotipo da Intel no centro, cercado por vários pequenos personagens. A imagem representa a importância da Intel na tecnologia moderna', src: '/Tecnologia3.jpg' },
  { id: 19, title: 'Circuitos Eletrônicos', description: 'Uma imagem de uma placa de circuito eletrônico com vários componentes conectados por fios. As cores vibrantes e as linhas complexas criam uma estética futurista.', src: '/Tecnologia4.jpg' },
  { id: 20, title: 'Circuito Verde', description: 'A imagem mostra um circuito verde com traços brilhantes, que criam um efeito de profundidade. O fundo é desfocado, dando a sensação de que o circuito se estende para o infinito.', src: '/Tecnologia5.jpg' },
  { id: 21, title: 'Hackeando alguma coisa', description: 'A imagem mostra uma cara de grade de arame em um fundo vermelho. A imagem está dentro de um quadrado vermelho com um contorno vermelho. A palavra "HACKED" está embaixo da imagem e também é vermelha.', src: '/Tecnologia6.jpg' },
  { id: 22, title: 'A Estacao de Jogos', description: 'Esta é uma imagem de um escritório de jogos escuro e futurista. Há uma mesa de computador com um monitor, teclado e mouse. Um teclado gamer com um monitor grande com um jogo de tela azul e um PC com um monitor menor que está visível ao lado da mesa. Há um microfone de gravação e uma cadeira de jogos de couro preto na frente da mesa', src: '/Tecnologia7.jpg' },
  { id: 23, title: 'Bateria quase carregada', description: 'Uma bateria quase carregada, representada por uma barra de carga verde brilhante, em um circuito de placa-mãe verde escuro.', src: '/Tecnologia8.jpg' },
  { id: 24, title: 'O Olho Cibernético', description: 'Uma imagem abstrata de um robô com olhos azuis brilhantes, envolto em um código binário azul, transmitindo uma sensação de tecnologia e inteligência artificial.', src: '/Tecnologia9.jpg' },
  { id: 25, title: 'AORUS: Team Up. Fight On.', description: 'A imagem mostra o logotipo AORUS, com um fundo de placas de circuito escuro. As letras do logotipo são brilhantes e coloridas, com um efeito de néon. O logotipo está localizado no canto superior direito da imagem. Abaixo dele, a frase "Team Up. Fight On." está escrita em branco, com um fundo preto.', src: '/Tecnologia10.jpg' },
  { id: 26, title: 'A CPU em suas mãos.', description: 'Uma mão segura uma CPU sobre uma placa-mãe de computador, pronta para ser instalada. As peças brilhantes da placa-mãe e os chips de memória ao fundo criam uma imagem atraente e tecnológica.', src: '/Tecnologia11.jpg' },
  { id: 27, title: 'Estação de trabalho gamer', description: 'A imagem mostra uma estação de trabalho gamer completa, com um laptop, dois computadores de mesa, um teclado, um mouse e fones de ouvido, todos com iluminação vermelha. O ambiente é escuro, criando um visual de alta tecnologia e moderno.', src: '/Tecnologia12.jpg' },
  { id: 28, title: 'Cidade da Tecnologia', description: 'Uma imagem abstrata de uma cidade construída em cima de um chip de computador. A imagem sugere a ideia de que a tecnologia está se tornando cada vez mais complexa e integrada em nossas vidas, e que o futuro pode ser um lugar onde a tecnologia e a arquitetura se fundem.', src: '/Tecnologia13.jpg' },
  { id: 29, title: 'Noite de Código', description: 'Um monitor de computador com código visível na tela, um teclado e um copo de vidro, tudo numa noite escura, sugerindo uma sessão de codificação noturna.', src: '/Tecnologia14.jpg' },
  { id: 30, title: 'Jato de Combate no Pouso', description: 'Um jato de combate prateado está no chão em um deck de aeronave, com uma cidade no fundo e algumas pessoas no fundo olhando para ele.', src: '/Tecnologia15.jpg' },

  { id: 31, title: 'Ohh Bixinho Bonito', description: 'Um tigre majestoso está deitado na sombra, cercado por plantas verdes exuberantes, calmamente olhando para a frente com seus impressionantes olhos amarelos. A pelagem laranja e preta listrada do tigre se destaca lindamente contra a vegetação.', src: '/Animal1.jpg' },
  { id: 32, title: 'Se achando só porque é o rei da selva', description: 'Um leão majestoso repousa sobre uma grande rocha ao entardecer, sua poderosa presença realçada pelo céu dourado. Com a juba densa e imponente, ele observa com olhar fixo, transmitindo força e tranquilidade. O corpo musculoso está relaxado, mas a postura continua imponente, como se estivesse sempre atento ao seu território', src: '/Animal2.jpg' },
  { id: 33, title: 'Eita, o bixano está bravo', description: 'Uma águia americana está olhando para a câmera com uma expressão séria. As penas brancas de sua cabeça e pescoço contrastam com as penas marrons escuras do seu corpo. O fundo é preto sólido.', src: '/Animal3.jpg' },
  { id: 34, title: ' Lobo das Neve', description: 'A imagem mostra um lobo cinza olhando diretamente para a câmera, com o focinho ligeiramente levantado, como se estivesse prestando atenção a algo. Seus olhos são escuros e penetrantes, com uma expressão ligeiramente ameaçadora. O pelo do lobo é cinza e marrom, com manchas brancas na testa e no peito.', src: '/Animal4.jpg' },
  { id: 35, title: 'Olhos de um Predador', description: 'Uma imagem próxima de um leopardo com olhos penetrantes. A sua pele em tons de dourado e preto destaca-se contra o fundo verde, criando uma imagem poderosa. O olhar do leopardo parece transmitir uma sensação de força e intensidade.', src: '/Animal5.jpg' },
  { id: 36, title: 'Um cervo nascendo o sol', description: 'Um cervo com grandes chifres está parado em um campo coberto de geada e olha para o sol nascente no fundo.', src: '/Animal6.jpg' },
  { id: 37, title: 'Cheetah Relaxando', description: 'Um guepardo está deitado em uma colina de grama seca, olhando para o horizonte. O pelo do animal é de cor marrom-dourada com manchas pretas. A grama está seca e marrom e há um céu azul nublado no fundo.', src: '/Animal7.jpg' },
  { id: 38, title: 'Um Urso Marrom na Floresta', description: 'Esta imagem mostra um urso marrom sentado em uma floresta, olhando diretamente para a câmera. O urso está em meio a uma vegetação densa, com um tronco de árvore atrás dele. ', src: '/Animal8.jpg' },
  { id: 39, title: ' Mãe e filhote de lontra-marinha', description: 'Esta é uma foto de duas lontras marinhas nadando em uma água azul. A lontra maior parece estar segurando a menor em seus braços, enquanto a menor parece estar olhando para a câmera. Ambas as lontras parecem felizes e relaxadas, aproveitando seu tempo na água.', src: '/Animal9.jpg' },
  { id: 40, title: 'Pantera Negra em um Galho de Árvore', description: 'Uma pantera negra está em um galho de árvore, com a floresta outonal como fundo. Ela está olhando para baixo, com uma expressão cautelosa. A pantera é de cor preta, com uma pele lisa e brilhante. O galho de árvore é marrom, com uma textura áspera.', src: '/Animal10.jpg' },
  { id: 41, title: 'Coruja olhando para a câmera', description: 'Uma coruja marrom e branca com olhos amarelos está parada em um tronco de árvore com um fundo de vegetação verde. A coruja está olhando diretamente para a câmera.', src: '/Animal11.jpg' },
  { id: 42, title: 'Quokkas fofinhas', description: 'Três quokkas fofinhos estão sentados perto de um tronco de árvore. O quokka da esquerda está olhando para a câmera, o quokka do meio está abraçando um quokka bebê.', src: '/Animal12.jpg' },
  { id: 43, title: 'Gigante gentil', description: 'Um tubarão-baleia gigante nada serenamente pelas águas azuis, cercado por um cardume de peixes menores. A imensa criatura parece quase mágica em meio a vida marinha que a cerca.', src: '/Animal13.jpg' },
  { id: 44, title: 'Beleza Negra', description: 'Um poderoso cavalo preto galopa por um campo, levantando poeira com seus cascos. A crina e a cauda do cavalo fluem atrás dele, dando a ele uma sensação de movimento e energia. O cavalo é uma criatura linda, e sua constituição poderosa é evidente em suas pernas fortes e corpo musculoso.', src: '/Animal14.jpg' },
  { id: 45, title: 'A cobra verde, esperando sua presa.', description: 'Esta imagem mostra uma cobra verde, provavelmente uma cobra constrictora, enroscada em um padrão em forma de coração. O cor verde vibrante e o padrão escamoso da pele da cobra são visíveis. Os olhos da cobra são pequenos e escuros, e sua boca está fechada. A cobra parece estar descansando ou esperando sua próxima refeição.', src: '/Animal15.jpg' },
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
