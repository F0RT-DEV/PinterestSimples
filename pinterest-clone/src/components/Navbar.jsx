import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/Natureza">Natureza</Link></li>
        <li><Link to="/category/Tecnologia">Tecnologia</Link></li>
        <li><Link to="/category/Animal">Animais</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;