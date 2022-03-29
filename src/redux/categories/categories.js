const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const checkStatus = (status) => ({
  type: CHECK_STATUS,
  payload: {
    status,
  },
});

const reducer = (action, state = []) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default reducer;
