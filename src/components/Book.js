import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import BookPropLi from './BookPropLi';

const Book = ({
  title,
  author,
  category,
  completed,
  id,
}) => {
  const data = [
    title,
    author,
    category,
    completed,
    id,
  ];
  const dispatch = useDispatch();
  const remove = () => dispatch(removeBook(id));
  return (
    <div>
      <ul>
        {data.map((item, index) => index < 4 && <BookPropLi key={Math.random()} item={item} />)}
      </ul>
      <button type="button" onClick={() => remove()}>Remove</button>
    </div>
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
