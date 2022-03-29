export const addBook = ([]) => {
  return {
    type: 'books/bookAdded',
    payload: {
      index: 0,
    },
  };
};

export const removeBook = ([]) => {
  return {
    type: 'books/bookRemoved',
    payload: {
      index: 0,
    },
  };
};

// need to dedside what is the state
const books = (state = [], action) => {
  switch (action.type) {
    case 'books/bookAdded':
      return state.concat([{ type: action.type }]);
    case 'books/bookRemoved':
      return state.map((book, index) => (action.index === index ? state.splice(index - 1, 1) : book));
    default:
      return state;
  }
};

export default books;
