import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  return (
    <div className="input-wrapper">
      <input value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
    </div>
  );
};

Input.defaultProps = {
  value: '',
  placeholder: 'Enter text',
  onChange: () => {},
};

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
