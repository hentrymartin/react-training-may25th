import React from 'react';
import Input from './components/FormComponents/Input/Input';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    };

    this.onCityChange = this.onCityChange.bind(this);
  }

  onCityChange(e) {
    this.setState({
      city: e.target.value,
    });
  }

  render() {
    return (
      <div className="app-wrapper">
        <Input value={this.state.city} onChange={this.onCityChange} placeholder="Enter City Name" />
        <div className="show-city">{this.state.city}</div>
      </div>
    );
  }
}

export default App;
