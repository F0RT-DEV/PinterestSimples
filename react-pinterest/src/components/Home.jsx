import React from 'react';

function Home() {
  return (
    <home style={styles.home}>
      <h1>Bem-vindo à página inicial!</h1>
    </home>
  );
}

const styles = {
  home: {
    display: 'flex',
    justifyContent: 'center',  // Centraliza horizontalmente
    alignItems: 'center',      // Centraliza verticalmente
    textAlign: 'center',       // Centraliza o texto dentro do h1
  }
}
export default Home;
