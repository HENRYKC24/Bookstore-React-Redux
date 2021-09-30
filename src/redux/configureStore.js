import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import books from './books/books';

const rootReducer = combineReducers({ books });

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
