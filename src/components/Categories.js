import './Categories.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  return (
    <div className="categories-continer">
      <article className="categories">
        <button className="check-status-btn" type="button" onClick={() => dispatch(checkStatus())}>
          Check Status
        </button>
      </article>
      <hr />
    </div>
  );
}

export default Categories;
