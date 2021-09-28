import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = ({
  title,
  author,
  category,
  completed,
  id,
}) => {
  const dispatch = useDispatch();
  const remove = () => dispatch(removeBook(id));
  return (
    <>
      <ul>
        <li>{title}</li>
        <li>{author}</li>
        <li>{category}</li>
        <li>{completed}</li>
      </ul>
      <button type="button" onClick={() => remove()}>Remove</button>
    </>
  );
};

Book.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  completed: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default Book;
