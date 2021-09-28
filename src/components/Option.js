import React from 'react';
import propTypes from 'prop-types';

const Option = ({ value, content }) => <option value={value}>{content}</option>;

Option.propTypes = {
  value: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
};

export default Option;
