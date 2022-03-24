import './AddBook.css';
import React from 'react';

function AddBook() {
  return (
    <div className="add-book">
      <input className="add-form" type="text" placeholder="Book Title..." />
      <input className="add-form-author" type="text" placeholder="Book Author..." />
      <button className="form-btn" type="submit">
        Add
      </button>
    </div>
  );
}

export default AddBook;
