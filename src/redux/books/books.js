const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const addBook = (arr) => ({
  type: ADD_BOOK,
  payload: {
    index: 0,
    arr,
  },
});

export const removeBook = (index) => ({
  type: REMOVE_BOOK,
  payload: {
    index: index,
  },
});

// need to dedside what is the state
const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      // I changed the return to use spred operator instead
      return [
        ...state,
        {
          type: action.type,
          index: action.index,
        },
      ];
    case REMOVE_BOOK:
      return state.map((book, index) => {
        if (action.payload.index === index) {
          // you may need to change ...state to ...book
          return [...state.slice(0, index), ...state.slice(index + 1)];
        }
        return book;
      });
    default:
      return state;
  }
};

export default reducer;
