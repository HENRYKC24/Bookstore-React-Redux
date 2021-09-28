import React from 'react';
import propTypes from 'prop-types';

const BookPropLi = ({ item }) => <li>{item}</li>;

BookPropLi.propTypes = {
  item: propTypes.string.isRequired,
};

export default BookPropLi;
