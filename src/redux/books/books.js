const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const addBook = (arr) => ({
  type: ADD_BOOK,
  index: 0,
  payload: {
    arr,
  },
});

export const removeBook = (arr) => ({
  type: REMOVE_BOOK,
  index: 0,
  payload: {
    arr,
  },
});

// need to dedside what is the state
const reducer = (action, state = []) => {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat([{ type: action.type }]);
    case REMOVE_BOOK:
      return state.map((book, index) => {
        if (action.index === index) {
          state.splice(index - 1, 1);
        }
        return book;
      });
    default:
      return state;
  }
};

export default reducer;
