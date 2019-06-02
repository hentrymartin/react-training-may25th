import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SearchWrapper from './components/SearchWrapper';
import Header from './components/Header';
import LandingPage from './components/LandingPage';

const RedirectTo = () => <Redirect to="/home" />;
const Routes = () => {
  return (
    <React.Fragment>
      <div>Outside the router context</div>
      <Router>
        <Header />
        <Route exact path="/" render={RedirectTo} />
        <Route path="/home" component={SearchWrapper} />
        <Route path="/settings" render={() => <div>Settings</div>} />
      </Router>
    </React.Fragment>
  );
};

export default Routes;
