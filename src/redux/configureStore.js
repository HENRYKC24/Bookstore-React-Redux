import { createStore } from 'redux';
import reducer from './books/books';

const initialState = [
  {
    title: 'Book1',
    author: 'Person1',
    category: 'category1',
    completed: '0%',
  },
  {
    title: 'Book2',
    author: 'Person2',
    category: 'category2',
    completed: '0%',
  },
  {
    title: 'Book3',
    author: 'Person3',
    category: 'category3',
    completed: '0%',
  },
];

const store = createStore(reducer, initialState);

export default store;
