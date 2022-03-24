import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <Link className="nav-link" to="/">
        Books
      </Link>
      <Link className="nav-link" to="/categories">
        Categories
      </Link>
    </div>
  );
}

export default Header;
