import React from 'react';
import propTypes from 'prop-types';

const Book = ({
  title,
  author,
  category,
  completed,
}) => (
  <>
    <ul>
      <li>{title}</li>
      <li>{author}</li>
      <li>{category}</li>
      <li>{completed}</li>
    </ul>
    <button type="button">Remove</button>
  </>
);

Book.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  completed: propTypes.string.isRequired,
};

export default Book;
