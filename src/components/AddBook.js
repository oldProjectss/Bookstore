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
    document.querySelector('.add-form').value = '';
    document.querySelector('.add-form-author').value = '';
  };
  return (
    <div className="add-book">
      <h3 className="add-book-headline">ADD NEW BOOK</h3>
      <form className="add-book-form" onSubmit={formEvent}>
        <input className="add-form" type="text" placeholder="Book Title..." onChange={(e) => setBookTitle(e.target.value)} required />
        <input className="add-form-author" type="text" placeholder="Book Author..." onChange={(e) => setBookAuthor(e.target.value)} required />
        <select className="add-form-categories" name="categories" onChange={(e) => setBookCategory(e.target.value)}>
          <option value="Unknowen" key="categories">
            Categories
          </option>
          <option value="Fiction" key="fiction">
            Fiction
          </option>
          <option value="Non Fiction" key="nonFiction">
            Non Fiction
          </option>
          <option value="Text book" key="textBook">
            Text Book
          </option>
        </select>
        <button className="form-btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default AddBook;
