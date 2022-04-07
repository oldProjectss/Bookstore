import './Book.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookInList } from '../redux/books/books';

function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="book">
      {`${book.title} By ${book.author}`}
      <button className="remove-button" type="button" onClick={() => dispatch(removeBookInList(book.id))}>
        Remove Book
      </button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
