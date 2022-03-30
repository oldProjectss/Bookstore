import './Books.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

function Books({ books }) {
  const books = useSelector((state) => state.book);
  if (books) {
    if (books.length > 0) {
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
  }
  return (
    <div>
      <p>Book shelf is Empty</p>
      <AddBook />
    </div>
  );
}

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Books;
