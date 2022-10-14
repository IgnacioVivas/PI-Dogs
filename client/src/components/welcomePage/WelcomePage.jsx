import React from 'react';
import { Link } from 'react-router-dom';
import imgWelcome from '../../images/pexels-lumn-406014.jpg';
import './welcomePage.scss';

function WelcomePage() {
  return (
    <div id='wp-container' style={{ backgroundImage: `url(${imgWelcome})` }}>
      <Link to={`/home`}>
        <button>go to home</button>
      </Link>
    </div>
  );
}

export default WelcomePage;
