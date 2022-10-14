import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderTwo from '../header/headerTwo/HeaderTwo';
import DogDetail from './dogDetail/DogDetail';

function DogsDetailContainer() {
  const { id } = useParams();
  const [dog, setDog] = useState();

  useEffect(() => {
    async function getADog() {
      const resp = await fetch(`http://localhost:3001/breed/${id}`);
      const data = await resp.json();
      setDog(data);
    }
    getADog();
    return () => {};
  }, [id]);

  return (
    <div>
      <HeaderTwo />
      <DogDetail dog={dog} />
    </div>
  );
}

export default DogsDetailContainer;
