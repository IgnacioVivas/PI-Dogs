import React from 'react';
import './alert.scss';

function Alert({ message }) {
  return (
    <div className='bg-alert'>
      <div className='alert-container'>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Alert;
