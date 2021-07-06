export const createBook = (book) => {
  return {
    type: "CREATE_BOOK",
    payload: book,
  };
};

export const incrementCount = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrementCount = () => {
  return {
    type: "DECREMENT",
  };
};
