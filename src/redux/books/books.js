export const addBook = ([]) => {
  return {
    type: 'books/bookAdded',
    payload: {},
  };
};

export const removeBook = ([]) => {
  return {
    type: 'books/bookRemoved',
    payload: {},
  };
};

// need to dedside what is the state
const books = (state = [], action) => {
  switch (action.type) {
    case 'books/bookAdded':
      return state.push(...action.payload);
    case 'books/bookRemoved':
      return state.pop(...action.payload);
    default:
      return state;
  }
};

export default books;
