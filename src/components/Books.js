import './Books.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { fetchBooksList } from '../redux/books/books';

function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!books.length) {
      dispatch(fetchBooksList());
    }
  }, []);

  if (books) {
    if (books.length > 0) {
      return (
        <div className="books-container">
          <article className="book-booklist">
            {books.map((book) => (
              <Book book={book} key={book.id} />
            ))}
          </article>
          <hr />
          <AddBook />
        </div>
      );
    }
  }
  return (
    <div className="books-container">
      <p className="no-book-message">Book shelf is Empty</p>
      <hr />
      <AddBook />
    </div>
  );
}

export default Books;
