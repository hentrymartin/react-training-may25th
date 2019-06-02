import React from 'react';
import './Select.scss';

const DefaultRow = props => {
  return (
    <div
      className="drop-down-item"
      onClick={() => {
        props.onSelectItem(props.item);
      }}
    >
      {props.item[props.displayName]}
    </div>
  );
};

DefaultRow.defaultProps = {
  onSelectItem: () => {},
  item: {},
  displayName: 'name',
};

export default DefaultRow;
