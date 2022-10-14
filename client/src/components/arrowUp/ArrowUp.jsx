import React from 'react';
import arrow from '../../images/arrow-up-line.svg';
import './arrowUp.scss';

function ArrowUp() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <span className='arrowUp-container' onClick={scrollToTop}>
      <img src={arrow} alt='' />
    </span>
  );
}

export default ArrowUp;
