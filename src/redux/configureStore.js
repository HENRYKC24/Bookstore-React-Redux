import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import books from './books/books';

const rootReducer = combineReducers({ books });

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
