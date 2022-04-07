import generate from '../../components/generateId';

const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const ApiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lQxiBqyuYoPaQftlJDlf/books';

export const fetchBooks = (books) => ({
  type: FETCH_BOOKS,
  payload: {
    books,
  },
});

export const fetchBooksList = () => (dispatch) => {
  fetch(ApiUrl)
    .then((result) => result.json())
    .then((bookList) => {
      const books = Object.keys(bookList).map((id) => ({
        id: Number(id),
        ...bookList[id][0],
      }));
      dispatch(fetchBooks(books));
    });
};

export const addBook = (arr) => ({
  type: ADD_BOOK,
  payload: {
    arr,
  },
});

export const addBookInList = (data) => (dispatch) => {
  fetch(ApiUrl, {
    method: 'POST',
    body: JSON.stringify({
      title: data.title,
      author: data.author,
      item_id: generate(),
      category: data.category,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((result) => {
    if (result.status === 201) {
      dispatch(
        addBook({
          title: data.title,
          author: data.author,
          item_id: generate(),
          category: data.category,
        }),
      );
    }
  });
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

export const removeBookInList = (id) => (dispatch) => {
  fetch(`${ApiUrl}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ book_id: id }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((result) => {
    if (result.status === 201) {
      dispatch(removeBook(id));
    }
  });
};
const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return action.payload.books;
    case ADD_BOOK:
      return state.concat({
        title: action.payload.arr.title,
        author: action.payload.arr.author,
        id: action.payload.arr.item_id,
        category: action.payload.arr.category,
      });
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
