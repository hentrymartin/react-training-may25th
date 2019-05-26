import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { type, onClick, label } = props;
  return (
    <div className="button-wrapper">
      <button type={type} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

Button.defaultProps = {
  type: 'submit',
  label: 'Submit',
  onClick: () => {},
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
