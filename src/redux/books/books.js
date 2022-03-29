export const addBook = (arr) => ({
  type: 'books/bookAdded',
  index: 0,
  payload: {
    arr,
  },
});

export const removeBook = (arr) => ({
  type: 'books/bookRemoved',
  index: 0,
  payload: arr,
});

// need to dedside what is the state
const books = (action, state = []) => {
  switch (action.type) {
    case 'books/bookAdded':
      return state.concat([{ type: action.type }]);
    case 'books/bookRemoved':
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

export default books;
