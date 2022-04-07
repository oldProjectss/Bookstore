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
        <div>
          <article>
            {books.map((book) => (
              <Book book={book} key={book.id} />
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

export default Books;
