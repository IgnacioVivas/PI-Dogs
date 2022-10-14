import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import iconDog from '../../../images/chihuahua-dog-face-svgrepo-com.png';
import './navBar.scss';
import imgHamburguer from '../../../images/menu-3-line.svg';
import imgClose from '../../../images/close-line.svg';

function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  const [addClass, setAddClass] = useState(false);

  const openMenu = () => {
    if (document.getElementById('menu')) {
      if (showMobileMenu === true) {
        document.querySelector('#menu').style.display = 'flex';
      } else {
        document.querySelector('#menu').style.display = 'none';
      }
    }
  };

  window.onscroll = function () {
    if (window.scrollY > 1200) setAddClass(true);
    else setAddClass(false);
  };

  return (
    <div className='nav-container' id={addClass ? 'down' : null}>
      <div className='nav-wrapper'>
        <div className='icon-container'>
          <Link to={`/home`}>
            <img src={iconDog} alt='' />
          </Link>
        </div>
        <div onClick={() => setShowMobileMenu(!showMobileMenu)} id='icon-menu'>
          {showMobileMenu ? (
            <img src={imgHamburguer} alt='' onClick={openMenu} />
          ) : (
            <img src={imgClose} alt='' onClick={openMenu} />
          )}
        </div>
        <ul className='menu' id='menu'>
          <li className='selected menu-item'>
            <Link className='link-selected' to={`/home`}>
              home
            </Link>
          </li>
          <li className='menu-item'>dogs</li>
          <li className='menu-item'>
            <Link to={`/new-breed`}>new breed</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
