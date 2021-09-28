import React from 'react';
import propTypes from 'prop-types';

const Option = ({ value, content, index }) => (
  <option defaultValue={!index && value}>
    {content}
  </option>
);

Option.propTypes = {
  value: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};

export default Option;
