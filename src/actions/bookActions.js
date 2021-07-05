const createBook = (book) => {
  return {
    type: "CREATE_BOOK",
    payload: book,
  };
};

const incrementCount = () => {
  return {
    type: "INCREMENT",
  };
};

const decrementCount = () => {
  return {
    type: "DECREMENT",
  };
};

export default {
  incrementCount,
  decrementCount,
  createBook,
};
