import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      {/* Logo à esquerda */}
      <div style={styles.logo}>
        <img src="/logo.png" alt="Logo" style={styles.logoImage} />
      </div>

      {/* Menu à direita */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/categoria1" style={styles.navLink}>Categoria 1</Link>
        <Link to="/categoria2" style={styles.navLink}>Categoria 2</Link>
        <Link to="/categoria3" style={styles.navLink}>Categoria 3</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    flex: '0 1 auto',
  },
  logoImage: {
    height: '50px',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default Header;

