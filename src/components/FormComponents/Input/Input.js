import React from 'react';
import PropTypes from 'prop-types';
import SEARCH_ICON from '../../../images/search.svg';
import './Input.scss';

const Input = props => {
  return (
    <div className="input-wrapper">
      <input autoFocus value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
      <img src={SEARCH_ICON} alt="Search Icon" onClick={props.onSearch} />
    </div>
  );
};

Input.defaultProps = {
  value: '',
  placeholder: 'Enter text',
  onChange: () => {},
  onSearch: () => {},
};

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
};

export default Input;
