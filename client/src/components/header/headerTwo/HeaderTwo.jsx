import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import backgroundHeader from '../../../images/background-header.jpg';
import NavBar from '../navBar/NavBar';
import './header-two.scss';

function HeaderTwo() {
  const currentPath = useLocation();
  const { id } = useParams();
  let title = '';

  switch (currentPath.pathname) {
    case `/detail-breed/${id}`:
      title = 'About this breed';
      break;
    case '/new-breed':
      title = 'Create a new breed';
      break;

    default:
      break;
  }
  return (
    <div style={{ backgroundImage: `url(${backgroundHeader})` }} className='header-two'>
      <NavBar />
      <h1>{title}</h1>
      <span>Lorem ipsum dolor sit amet consectetur adipisic</span>
    </div>
  );
}

export default HeaderTwo;
