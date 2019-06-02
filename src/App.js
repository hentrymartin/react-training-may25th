import React from 'react';
import './styles/App.scss';
import Routes from './routes';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-wrapper">
        <Routes />
      </div>
    );
  }
}

export default App;
