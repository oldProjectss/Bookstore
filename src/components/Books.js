import './Books.css';
import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

function Books() {
  const books = useSelector((state) => state.books);
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
