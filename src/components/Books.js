import './Books.css';
import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import AddBook from './AddBook';

function Books({ books }) {
  if (books) {
    return (
      <div>
        <article>
          {books.map((book) => (
            <Book book={book} key={book.title} />
          ))}
        </article>
        <AddBook />
      </div>
    );
  }
  return 'Book shelf Empty';
}

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Books;
