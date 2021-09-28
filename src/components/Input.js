import React from 'react';
import propTypes from 'prop-types';

const Input = ({
  name,
  value,
  placeholder,
  handleChange,
  className,
}) => (
  <>
    <input
      onChange={(e) => handleChange(e)}
      placeholder={placeholder}
      value={value}
      className={className}
      name={name}
      type="text"
    />
  </>
);

Input.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  className: propTypes.string.isRequired,
};

export default Input;
