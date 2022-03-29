import categoriesState from './categories/categories';
import books from './books/books';
import { combineReducers } from 'redux';
import { createStore } from 'redux';

const root = combineReducers(categoriesState, books);

const store = createStore(root);
