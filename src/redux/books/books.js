const ADD_BOOK = 'bookstore/book/LOAD_BOOKS';
const REMOVE_BOOK = 'bookstore/book/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/book/GET_BOOKS';

// Create actions
export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}

export function getBooks(books) {
  return { type: GET_BOOKS, books };
}

const initialState = [];

// Define reducer
export default function reducer(state = initialState, action = {}) {
  const {
    book,
    id,
    type,
    books,
  } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, book];
    case GET_BOOKS:
      return [
        ...Object.entries(books).map((item) => ({
          id: item[0],
          title: item[1][0].title,
          category: item[1][0].category,
        })),
      ];
    case REMOVE_BOOK:
      return state.filter((item) => item.id !== id);
    default:
      return state;
  }
}

export const getFromServer = () => async (dispatch) => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
  const books = await fetch(`${url}/apps/nU7PpkbrGSD80b3w1Lzl/books/`);
  const result = await books.json();
  dispatch(getBooks(result));
};

export const sendToServer = (data) => (dispatch) => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
  fetch(`${url}/apps/nU7PpkbrGSD80b3w1Lzl/books/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then(() => {
      dispatch(getFromServer());
    });
};

export const removeFromServer = (id) => (dispatch) => {
  const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
  fetch(`${url}/apps/nU7PpkbrGSD80b3w1Lzl/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  })
    .then((response) => response.text())
    .then(() => {
      dispatch(getFromServer());
    });
};
