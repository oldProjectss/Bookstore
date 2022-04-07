import './AddBook.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookInList } from '../redux/books/books';

function AddBook() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('non-fiction');
  const dispatch = useDispatch();
  const formEvent = (e) => {
    e.preventDefault();
    dispatch(addBookInList({ title: bookTitle, author: bookAuthor, category: bookCategory }));
  };
  return (
    <div className="add-book">
      <form className="add-book-form" onSubmit={formEvent}>
        <input className="add-form" type="text" placeholder="Book Title..." onChange={(e) => setBookTitle(e.target.value)} />
        <input className="add-form-author" type="text" placeholder="Book Author..." onChange={(e) => setBookAuthor(e.target.value)} />
        <select name="categories" onChange={(e) => setBookCategory(e.target.value)}>
          <option value="fiction" key="fiction">
            Fiction
          </option>
          <option value="nonFiction" key="nonFiction">
            Non Fiction
          </option>
          <option value="textBook" key="textBook">
            Text Book
          </option>
        </select>
        <button className="form-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddBook;
