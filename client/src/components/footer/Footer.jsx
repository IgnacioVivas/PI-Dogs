import React from 'react';
import imgFooter from '../../images/dog-svgrepo-com.png';
import twitter from '../../images/twitter-fill.svg';
import twich from '../../images/twitch-fill.svg';
import facebook from '../../images/facebook-box-fill.svg';
import instagram from '../../images/instagram-fill.svg';
import './footer.scss';

function Footer() {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-wrapper'>
          <div className='footer-text'>
            <img src={imgFooter} alt='' />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, rerum? Dolores,
              non, iusto nihil vero in doloremque consequatur deserunt maxime possimus temporibus
              corrupti, quis.
            </p>
          </div>
          <div className='footer-questions'>
            <h5>How to take part</h5>
            <p>homepage</p>
            <p>how to create a new breed</p>
            <p>requirements</p>
            <p>homepage</p>
            <p>how to create a new breed</p>
          </div>
          <div className='networks-container'>
            <h5>Our Social Networks</h5>
            <div className='networks'>
              <img src={instagram} alt='' />
              <img src={twich} alt='' />
              <img src={facebook} alt='' />
              <img src={twitter} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='copyright-container'>
        <span>© Copyright 2022 | Ignacio Vivas</span>
      </div>
    </>
  );
}

export default Footer;
