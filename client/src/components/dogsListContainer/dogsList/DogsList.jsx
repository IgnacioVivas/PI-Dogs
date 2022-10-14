import React, { useEffect, useState } from 'react';
import Loader from '../../loader/Loader';
import DogCard from './dogCard/DogCard';
import './dogsList.scss';

function DogsList({ allDogs }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {};
  }, []);

  return (
    <div className='dogs-list-container' id='dogs-list-container'>
      <div className='title-container'>
        <h2>know your favorite breed</h2>
        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h3>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className='dogs-list'>
          {allDogs.length === 0 ? (
            <span id='filterBug'>no result found</span>
          ) : (
            <>
              {allDogs?.map((dog) => (
                <DogCard key={dog.id} dog={dog} />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default DogsList;
