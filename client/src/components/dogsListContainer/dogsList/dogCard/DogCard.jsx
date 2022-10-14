import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './dogCard.scss';
import imgForm from '../../../../images/perro-veder.jpg';
import imgPlaceHolder from '../../../../images/yoda-perro-gris.jpg';
import CreatorButton from '../../../createNewBreed/formNewBreed/creatorButton/CreatorButton';

function DogCard({ dog }) {
  const currentPath = useLocation();
  const [temperaments, setTemperaments] = useState('');
  const [temperamentName, setTemperamentName] = useState('');

  const writeTemperaments = () => {
    let finalString = '';
    if (!dog?.id || typeof dog?.id === 'number') {
      dog?.temperaments?.forEach((element, index) => {
        finalString =
          index === dog?.temperaments?.length - 1
            ? finalString + element
            : finalString + element + ', ';
      });
    } else {
      finalString = dog?.temperaments[0]?.name;
    }

    setTemperaments(finalString);
  };
  const getATemperament = useCallback(async () => {
    const resp = await fetch(`http://localhost:3001/temperament/${dog.temperament}`);
    const data = await resp.json();
    setTemperamentName(data.name);
  }, [dog.temperament]);

  useEffect(() => {
    writeTemperaments();
  });

  useEffect(() => {
    if (dog?.temperament !== '' && currentPath.pathname.includes('/new-breed')) getATemperament();
    dog?.temperament === '' && setTemperamentName('');
  }, [dog, currentPath.pathname, getATemperament]);

  return (
    <div className='card-container'>
      {currentPath.pathname.includes('/new-breed') ? (
        <div className='img-container' style={{ backgroundImage: `url(${imgForm})` }}></div>
      ) : (
        <div
          className='img-container'
          style={{ backgroundImage: `url(${dog?.image ? dog?.image : imgPlaceHolder})` }}
        ></div>
      )}
      <div className='description-wrapper'>
        <div className='name-container'>
          <h3>{dog?.name}</h3>
        </div>
        <div className='detail-container'>
          {currentPath.pathname.includes('/new-breed') ? (
            <>
              <p>
                <span>temperament:</span> {temperamentName}
              </p>
            </>
          ) : (
            <>
              <p>
                <span>temperament: </span>
                {temperaments}
              </p>
            </>
          )}
          <p>
            <span>weight-imperial:</span> {dog?.weightImperial}
          </p>
          <p>
            <span>weight-metric:</span> {dog?.weightMetric}
          </p>
          {currentPath.pathname.includes('/new-breed') && (
            <>
              <p>
                <span>height-imperial:</span> {dog?.heightImperial}
              </p>
              <p>
                <span>height-metric:</span> {dog?.heightMetric}
              </p>
              <p>
                <span>Life-Expectancy:</span> {dog?.lifeExpectancy}
              </p>
              <p>
                <span>origin:</span> {dog?.origin}
              </p>
            </>
          )}
        </div>
      </div>
      {currentPath.pathname.includes('/new-breed') ? (
        <CreatorButton />
      ) : (
        <Link to={`/detail-breed/${dog?.id}`}>
          <div className='btn-view'>
            <span>view</span>
          </div>
        </Link>
      )}
    </div>
  );
}

export default DogCard;
