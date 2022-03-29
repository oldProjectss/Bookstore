export const checkStatus = (status) => ({
  type: 'categories/checkStatus',
  payload: {
    status,
  },
});

const categoriesState = (state = [], action) => {
  switch (action.type) {
    case 'categories/checkStatus':
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesState;
