// import { useId } from 'react-id-generator';
import generate from '../../components/generateId';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const addBook = (arr) => ({
  type: ADD_BOOK,
  payload: {
    arr,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat({ id: generate(), ...action.payload.arr });
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
