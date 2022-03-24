import './Book.css';
import React from 'react';

function Book() {
  return (
    <div className="book">
      <h2 className="book-title">Book Title</h2>
      <p className="book-author">Author</p>
      <button className="remove-button" type="button">
        Remove Book
      </button>
    </div>
  );
}

export default Book;
