import './Book.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { removeBookInList } from '../redux/books/books';

function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <section className="book">
        <p className="book-category">{book.category}</p>
        <h2 className="book-name">{book.title}</h2>
        <p className="book-author">{book.author}</p>
        <button className="comment-button" type="button">
          Comment
        </button>
        <button className="remove-button" type="button" onClick={() => dispatch(removeBookInList(book.id))}>
          Remove
        </button>
        <button className="edit-button" type="button">
          Edit
        </button>
      </section>
      <div className="progress-section">
        <section className="book-progress">
          <FontAwesomeIcon className="spinner" icon={faCircleNotch} />
          <div className="progress-count">
            <h2 className="progress-number">94%</h2>
            <p className="progress-complet">Completed</p>
          </div>
        </section>
        <p className="progress-seperator" />
        <section className="update-book-progress">
          <h3 className="current">CURRENT CHAPTER</h3>
          <p className="chapter">Chapter16</p>
          <button className="update-progress-btn" type="button">
            UPDATE PROGRESS
          </button>
        </section>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
