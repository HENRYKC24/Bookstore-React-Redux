import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFromServer } from '../redux/books/books';
import Book from './Book';

const AllBooks = () => {
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state);
  const books = allBooks.books.length ? allBooks.books : [];
  books.map((book) => {
    const newBook = book;
    const { title } = newBook;
    const [,,,,,, timeStamp] = title.split('<*)$!?^|^?!$(*>');
    newBook.timeStamp = timeStamp;
    return newBook;
  });
  const Books = books.sort(
    (a, b) => parseInt(a.timeStamp, 10) - parseInt(b.timeStamp, 10),
  ).map((book) => {
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

  return <div className="all-books">{Books}</div>;
};

export default AllBooks;
