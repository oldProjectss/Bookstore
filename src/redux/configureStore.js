import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categoriesState from './categories/categories';
import books from './books/books';

const root = combineReducers({ categoriesState, books });

const store = createStore(root, applyMiddleware(thunk));

export default store;
