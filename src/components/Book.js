import './Book.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <article className="book-info">
        {book.title}
        {book.author}
      </article>
      <button className="remove-button" type="button" onClick={dispatch(removeBook(book.index))}>
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
