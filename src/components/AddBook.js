import './AddBook.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function AddBook() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const dispatch = useDispatch();
  const formEvent = (e) => {
    e.preventDefault();
    dispatch(addBook({ title: bookTitle, author: bookAuthor }));
  };
  return (
    <div className="add-book">
      <form className="add-book-form" onSubmit={formEvent}>
        <input className="add-form" type="text" placeholder="Book Title..." onChange={(e) => setBookTitle(e.target.value)} />
        <input className="add-form-author" type="text" placeholder="Book Author..." onChange={(e) => setBookAuthor(e.target.value)} />
        <button className="form-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddBook;
