import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SEARCH_ICON from '../../../images/search.svg';
import './Input.scss';

const Input = props => {
  return (
    <div
      className={classnames('input-wrapper', {
        error: !props.value,
      })}
    >
      <input
        autoFocus={props.autoFocus}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      <img src={SEARCH_ICON} alt="Search Icon" onClick={props.onSearch} />
    </div>
  );
};

Input.defaultProps = {
  value: '',
  placeholder: 'Enter text',
  onChange: () => {},
  onSearch: () => {},
  onFocus: () => {},
  onBlur: () => {},
  autoFocus: false,
};

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  autoFocus: PropTypes.bool,
};

export default Input;
