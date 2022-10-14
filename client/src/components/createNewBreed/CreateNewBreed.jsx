import React, { useEffect } from 'react';
import HeaderTwo from '../header/headerTwo/HeaderTwo';
import FormNewBreed from './formNewBreed/FormNewBreed';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTemperaments } from '../../redux/actions';

function CreateNewBreed() {
  const { allTemperaments } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTemperaments());
  }, [dispatch]);
  return (
    <div>
      <HeaderTwo />
      <FormNewBreed allTemperaments={allTemperaments} />
    </div>
  );
}

export default CreateNewBreed;
