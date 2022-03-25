import './Book.css';
import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <div className="book">
      <article className="book-info">
        {book.title}
        {book.author}
      </article>
      <button className="remove-button" type="button">
        Remove Book
      </button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
