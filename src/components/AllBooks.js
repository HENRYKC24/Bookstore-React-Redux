import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const AllBooks = () => {
  const allBooks = useSelector((state) => state);
  const { books } = allBooks;
  const Books = books.map((book) => {
    const {
      title,
      author,
      category,
      completed,
      id,
    } = book;

    return (
      <Book
        key={Math.random()}
        completed={completed}
        title={title}
        author={author}
        category={category}
        id={id}
      />
    );
  });

  return <div>{Books}</div>;
};

export default AllBooks;
// nU7PpkbrGSD80b3w1Lzl 
