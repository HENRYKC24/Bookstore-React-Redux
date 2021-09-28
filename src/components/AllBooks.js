import React from 'react';
import Book from './Book';
import store from '../redux/configureStore';

const AllBooks = () => {
  const Books = store.getState().map((book) => {
    const { title, author, category } = book;
    return <Book key={Math.random()} title={title} author={author} category={category} />;
  });

  return (
    <div>
      {Books}
    </div>
  );
};

export default AllBooks;
