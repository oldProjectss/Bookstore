import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
      <header className="logo-navbar">
        <h1 className="logo">Bookstore CMS</h1>
        <nav className="nav-link">
          <Link className="nav-link" to="/">
            BOOKS
          </Link>
          <Link className="nav-link" to="/categories">
            CATEGORIES
          </Link>
        </nav>
      </header>
      <FontAwesomeIcon icon="coffee" />
      <button className="profile" type="button">
        <FontAwesomeIcon icon={faUser} />
      </button>
    </div>
  );
}

export default Header;
