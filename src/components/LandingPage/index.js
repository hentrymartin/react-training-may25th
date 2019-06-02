import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Link to="/home">Home</Link>
    </div>
  );
};

export default LandingPage;
