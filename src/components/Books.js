import './Books.css';
import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

function Books() {
  return (
    <div>
      <Book />
      <AddBook />
    </div>
  );
}

export default Books;
