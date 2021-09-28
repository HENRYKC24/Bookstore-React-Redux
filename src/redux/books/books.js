const ADD_BOOK = 'bookstore/book/LOAD_BOOKS';
const REMOVE_BOOK = 'bookstore/book/REMOVE_BOOK';

const initialState = [];

// Define reducer
export default function reducer(state = initialState, action = {}) {
  const { book, id, type } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, book];
    case REMOVE_BOOK:
      return state.filter((item) => item.id !== id);
    default: return state;
  }
}

// Create actions
export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}
