import React from 'react';
import Book from './Book';
import store from '../redux/configureStore';

const AllBooks = () => {
  const {
    books: { books },
  } = store.getState();
  const Books = books.map((book) => {
    const {
      title,
      author,
      category,
      completed,
    } = book;
    return (
      <Book
        key={Math.random()}
        completed={completed}
        title={title}
        author={author}
        category={category}
      />
    );
  });

  return <div>{Books}</div>;
};

export default AllBooks;
