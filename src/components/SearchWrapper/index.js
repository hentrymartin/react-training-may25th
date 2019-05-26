import React from 'react';
import SearchResult from '../SearchResult';
import Input from '../FormComponents/Input/Input';
import './SearchWrapper.scss';

class SearchWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      searchedResult: null,
    };
  }

  onCityChange = e => {
    this.setState({
      city: e.target.value,
    });
  };

  onCitySearch = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=fc79192ee5cc2c316c7ec2fddf469a3e
    `)
      .then(response => response.json())
      .then(searchedResult => {
        this.setState({
          searchedResult,
        });
      });
  };

  render() {
    return (
      <div className="search-wrapper">
        <Input value={this.state.city} onChange={this.onCityChange} onSearch={this.onCitySearch} />
        <SearchResult searchedResult={this.state.searchedResult} />
      </div>
    );
  }
}

export default SearchWrapper;
