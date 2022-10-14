import React from 'react';
import './dogDetail.scss';
import imgPlaceHolder from '../../../images/yoda-perro-gris.jpg';
import Loader from '../../loader/Loader';

function DogDetail({ dog }) {
  return (
    <>
      {!dog ? (
        <Loader />
      ) : (
        <div className='dog-detail'>
          <div className='detail'>
            <div className='box-detail'>
              <div
                className='img-detail'
                style={{ backgroundImage: `url(${dog?.image ? dog?.image : imgPlaceHolder})` }}
              ></div>
              <div className='detail-description'>
                <h4>{dog?.name}</h4>
                <p>
                  <span>temperament: </span>
                  {dog?.temperament
                    ? dog?.temperament
                    : dog?.temperaments
                    ? dog?.temperaments[0]?.name
                    : 'Unknown'}
                </p>
                <p>
                  <span>weight-imperial: </span>
                  {dog?.weightImperial}
                </p>
                <p>
                  <span>weight-metric: </span>
                  {dog?.weightMetric}
                </p>
                <p>
                  <span>height-imperial: </span>
                  {dog?.heightImperial}
                </p>
                <p>
                  <span>height-metric: </span>
                  {dog?.heightMetric}
                </p>
                <p>
                  <span>life expectancy: </span>
                  {dog?.lifeExpectancy}
                </p>
                <p>
                  <span>origin: </span>
                  {dog?.origin === '' || !dog?.origin ? 'unknown' : dog?.origin}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DogDetail;
