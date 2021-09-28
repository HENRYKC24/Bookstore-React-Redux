import React from 'react';
import propTypes from 'prop-types';

const Book = ({ title, author, category }) => (
  (
    <ul>
      <li>{title}</li>
      <li>{author}</li>
      <li>{category}</li>
    </ul>
  )
);

Book.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
};

export default Book;
