import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFromServer } from '../redux/books/books';
import Book from './Book';

const AllBooks = () => {
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state);
  const books = allBooks.books.length ? allBooks.books : [];
  const Books = books.map((book) => {
    const {
      title,
      category,
      id,
    } = book;

    return (
      <Book
        key={Math.random()}
        title={title}
        category={category}
        id={id}
      />
    );
  });

  useEffect(() => {
    dispatch(getFromServer());
  }, []);

  return <div>{Books}</div>;
};

export default AllBooks;
