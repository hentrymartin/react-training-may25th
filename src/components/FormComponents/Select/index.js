import React, { Component } from 'react';
import Input from '../Input/Input';
import DefaultRow from './DefaultRow';
import './Select.scss';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: {},
      dataEntered: '',
      showDropdown: false,
    };
  }

  onEnteredValueChange = e => {
    this.setState({
      dataEntered: e.target.value,
      selectedValue: {},
    });
  };

  toggleDropdown = showDropdown => {
    this.setState({
      showDropdown,
    });
  };

  onSelectItem = selectedValue => {
    this.setState({
      selectedValue,
    });
  };

  getSelectedValue = () => {
    const selectedValue = this.state.selectedValue[this.props.displayName];
    if (selectedValue) {
      return selectedValue;
    } else {
      return this.state.dataEntered;
    }
  };

  onSearch = () => {
    this.props.onSearch(this.getSelectedValue());
  };

  render() {
    const { props } = this;
    const { data, displayName } = props;
    return (
      <div className="selected-wrapper">
        <Input
          value={this.getSelectedValue()}
          onChange={this.onEnteredValueChange}
          onFocus={() => {
            this.toggleDropdown(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              this.toggleDropdown(false);
            }, 200);
          }}
          onSearch={this.onSearch}
        />

        {this.state.showDropdown && (
          <div className="drop-down">
            {data
              .filter(item => item[displayName].indexOf(this.state.dataEntered) > -1)
              .map(item => {
                const RowComponent = this.props.rowComponent;
                return (
                  <RowComponent onSelectItem={this.onSelectItem} item={item} displayName={this.props.displayName} />
                );
              })}
          </div>
        )}
      </div>
    );
  }
}

Select.defaultProps = {
  data: [],
  displayName: 'name',
  onSearch: () => {},
  rowComponent: DefaultRow,
};

export default Select;
