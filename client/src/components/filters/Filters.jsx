import React, { useEffect } from 'react';
import Select from './select/Select';
import './filters.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTemperaments, sortData } from '../../redux/actions';

function Filters() {
  const dispatch = useDispatch();
  const { allDogsBackUp, allTemperaments } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllTemperaments());
  }, [dispatch]);

  const orderAlphabetically = (order) => {
    if (order === 'AZ') {
      dispatch(
        sortData(
          allDogsBackUp.sort((x, y) => {
            if (x.name < y.name) return -1;
            if (x.name > y.name) return 1;
            return 0;
          })
        )
      );
    } else {
      dispatch(
        sortData(
          allDogsBackUp.sort((x, y) => {
            if (x.name > y.name) return -1;
            if (x.name < y.name) return 1;
            return 0;
          })
        )
      );
    }
  };

  const filterByExistingOrNot = (param) => {
    if (param === 'existing') {
      dispatch(sortData(allDogsBackUp.filter((item) => typeof item.id === 'number')));
    } else {
      dispatch(sortData(allDogsBackUp.filter((item) => typeof item.id === 'string')));
    }
  };

  const sortByTemperament = (temperament) => {
    dispatch(sortData(allDogsBackUp.filter((item) => item?.temperaments?.includes(temperament))));
  };

  const sortByWeight = (order) => {
    if (order === 'ascending') {
      dispatch(
        sortData(
          allDogsBackUp.sort((x, y) => {
            if (
              parseInt(x.weightImperial.toString().slice(0, 2)) <
              parseInt(y.weightImperial.toString().slice(0, 2))
            )
              return -1;
            if (
              parseInt(x.weightImperial.toString().slice(0, 2)) >
              parseInt(y.weightImperial.toString().slice(0, 2))
            )
              return 1;
            return 0;
          })
        )
      );
    } else {
      dispatch(
        sortData(
          allDogsBackUp.sort((x, y) => {
            if (
              parseInt(x.weightImperial.toString().slice(0, 2)) >
              parseInt(y.weightImperial.toString().slice(0, 2))
            )
              return -1;
            if (
              parseInt(x.weightImperial.toString().slice(0, 2)) <
              parseInt(y.weightImperial.toString().slice(0, 2))
            )
              return 1;
            return 0;
          })
        )
      );
    }
  };

  return (
    <div className='filters-container'>
      <Select
        orderAlphabetically={(order) => orderAlphabetically(order)}
        filterByExistingOrNot={(param) => filterByExistingOrNot(param)}
        allTemperaments={allTemperaments.map((item) => item.name)}
        sortByTemperament={(temperament) => sortByTemperament(temperament)}
        sortByWeight={(order) => sortByWeight(order)}
      />
    </div>
  );
}

export default Filters;
