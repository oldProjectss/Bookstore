import './Categories.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
    </div>
  );
}

export default Categories;
