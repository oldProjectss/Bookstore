import { combineReducers, createStore } from 'redux';
import categoriesState from './categories/categories';
import books from './books/books';

const root = combineReducers({ categoriesState, books });

const store = createStore(root);

export default store;
