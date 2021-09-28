const LOAD_BOOKS = 'bookstore/book/LOAD_BOOKS';
const ADD_BOOK = 'bookstore/book/ADD_BOOK';
const ADD_COMMENT = 'bookstore/book/ADD_COMMENT';
const REMOVE_BOOK = 'bookstore/book/REMOVE_BOOK';
const EDIT_BOOK = 'bookstore/book/EDIT_BOOK';
const UPDATE_PROGRESS = 'bookstore/book/UPDATE_PROGRESS';

// Define reducer
export default function reducer(state = {}, action = {}) {
  const { book } = action;
  const books = JSON.parse(localStorage.getItem('books'));
  switch (action.type) {
    case LOAD_BOOKS:
      return books;
    case ADD_BOOK:
      localStorage.setItem(JSON.stringify({ ...state, book }));
      return { ...state, book };
    case EDIT_BOOK:
      return ([...state].map((book) => (action.id === book.id)) ? action.book : book);
    case REMOVE_BOOK:
      return ([...state].filter((book) => action.id !== book.id));
    case UPDATE_PROGRESS:
      return ([...state].map((book) => (action.id === book.id)) ? action.book : book);
    case ADD_COMMENT:
      return ([...state].map((book) => (action.id === book.id)) ? action.book : book);
    default: return state;
  }
}

// Create actions
export function addBook(book) {
  return { type: ADD_BOOK, book };
}
export function loadBooks() {
  return { type: LOAD_BOOKS };
}

export function addComment(id, book) {
  return { type: ADD_COMMENT, id, book };
}

export function editBook(id, book) {
  return { type: EDIT_BOOK, id, book };
}

export function updateProgress(id, book) {
  return { type: UPDATE_PROGRESS, id, book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}
