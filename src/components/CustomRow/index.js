import React from 'react';
import './CustomRow.scss';

const CustomRow = props => {
  return (
    <div
      className="drop-down-item"
      onClick={() => {
        props.onSelectItem(props.item);
      }}
    >
      <span>
        <img src={props.item.img} />
      </span>
      {props.item[props.displayName]}
    </div>
  );
};

CustomRow.defaultProps = {
  onSelectItem: () => {},
  item: {},
  displayName: 'name',
};

export default CustomRow;
