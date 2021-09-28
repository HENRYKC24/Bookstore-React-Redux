const LOAD_BOOK_CATEGORY = 'bookstore/book/LOAD_BOOK_CATEGORY';

// Define reducer
export default function categoryReducer(state = {}, action = {}) {
  if (action.type === LOAD_BOOK_CATEGORY) {
    return [...state].filter((book) => book.category === action.category);
  }
  return state;
}

// Create actions
export function loadBookCategory(category) {
  return { type: LOAD_BOOK_CATEGORY, category };
}
