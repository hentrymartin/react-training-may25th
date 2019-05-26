import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchWrapper from './components/SearchWrapper';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <SearchWrapper />
      </div>
    );
  }
}

export default App;
