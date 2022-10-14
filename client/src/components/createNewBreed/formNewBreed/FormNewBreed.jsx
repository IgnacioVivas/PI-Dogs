import React, { useState } from 'react';
import Alert from '../../alert/Alert';
import DogCard from '../../dogsListContainer/dogsList/dogCard/DogCard';
import './formNewBreed.scss';

function FormNewBreed({ allTemperaments }) {
  const validate = (inputValue) => {
    let errors = {};
    const onlyLetters = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i');
    if (!inputValue.name) errors.name = 'name is required';
    if (!inputValue.temperament) errors.temperament = 'temperament is required';
    if (!inputValue.weightImperial) errors.weightImperial = 'weight imperial is required';
    if (!inputValue.weightMetric) errors.weightMetric = 'weight metric is required';
    if (!inputValue.heightImperial) errors.heightImperial = 'height imperial is required';
    if (!inputValue.heightMetric) errors.heightMetric = 'height metric is required';
    if (!inputValue.lifeExpectancy) errors.lifeExpectancy = 'life expectancy is required';
    if (!inputValue.origin) errors.origin = 'origin is required';

    if (!inputValue.origin.match(onlyLetters)) errors.origin = 'only letters allowed';
    if (!inputValue.name.match(onlyLetters)) errors.origin = 'only letters allowed';
    return errors;
  };

  const resetForm = (inputValue) => {
    setInputValue({
      ...inputValue,
      name: '',
      temperament: '',
      weightImperial: '',
      weightMetric: '',
      heightImperial: '',
      heightMetric: '',
      lifeExpectancy: '',
      origin: '',
    });
  };

  const [errors, setErrors] = useState({});
  const [showAlert, setshowAlert] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: '',
    temperament: '',
    weightImperial: '',
    weightMetric: '',
    heightImperial: '',
    heightMetric: '',
    lifeExpectancy: '',
    origin: '',
  });
  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const createBreed = () => {
    const url = 'http://localhost:3001/breeds';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...inputValue, temperament: [inputValue.temperament] }),
    };
    fetch(url, requestOptions)
      .then(() => {
        setshowAlert(true);
        setTimeout(() => {
          setshowAlert(false);
        }, 2500);
      })
      .catch((error) => console.log('Form submit error', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formValues = {
      ...inputValue,
      [e.target.name]: e.target.value,
    };
    setErrors(validate(formValues));

    if (Object.keys(validate(formValues)).length === 0) {
      resetForm();
      createBreed();
    }
  };
  return (
    <div className='form-container'>
      <form action='' onSubmit={handleSubmit}>
        <div className='form-wrapper'>
          <div className='input-container'>
            <label htmlFor=''>name</label>
            <input
              className={errors.name && 'danger'}
              name='name'
              type='text'
              value={inputValue.name}
              onChange={handleChange}
              maxLength={30}
            />
            {errors.name && <p className='danger'>{errors.name}</p>}
          </div>
          <div className='input-container'>
            <label htmlFor=''>temperament</label>
            <select
              className={errors.temperament && 'danger'}
              name='temperament'
              value={inputValue.temperament}
              onChange={handleChange}
            >
              <option disabled value={''}>
                select a temperament
              </option>
              {allTemperaments.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.temperament && <p className='danger'>{errors.temperament}</p>}
          </div>
          <div className='input-container'>
            <label htmlFor=''>weight-imperial</label>
            <input
              className={errors.weightImperial && 'danger'}
              name='weightImperial'
              type='number'
              value={inputValue.weightImperial}
              onChange={handleChange}
            />
            {errors.weightImperial && <p className='danger'>{errors.weightImperial}</p>}
          </div>
          <div className='input-container'>
            <label htmlFor=''>weight-metric</label>
            <input
              className={errors.weightMetric && 'danger'}
              name='weightMetric'
              type='number'
              value={inputValue.weightMetric}
              onChange={handleChange}
            />
            {errors.weightMetric && <p className='danger'>{errors.weightMetric}</p>}
          </div>
          <div className='input-container'>
            <label htmlFor=''>height-imperial</label>
            <input
              className={errors.heightImperial && 'danger'}
              name='heightImperial'
              type='number'
              value={inputValue.heightImperial}
              onChange={handleChange}
            />
            {errors.heightImperial && <p className='danger'>{errors.heightImperial}</p>}
          </div>
          <div className='input-container'>
            <label htmlFor=''>height-metric</label>
            <input
              className={errors.heightMetric && 'danger'}
              name='heightMetric'
              type='number'
              value={inputValue.heightMetric}
              onChange={handleChange}
            />
            {errors.heightMetric && <p className='danger'>{errors.heightMetric}</p>}
          </div>
          <div className='input-container'>
            <label htmlFor=''>life-expectancy</label>
            <input
              className={errors.lifeExpectancy && 'danger'}
              name='lifeExpectancy'
              type='number'
              value={inputValue.lifeExpectancy}
              onChange={handleChange}
            />
            {errors.lifeExpectancy && <p className='danger'>{errors.lifeExpectancy}</p>}
          </div>
          <div className='input-container'>
            <label htmlFor=''>origin</label>
            <input
              className={errors.origin && 'danger'}
              name='origin'
              type='text'
              value={inputValue.origin}
              onChange={handleChange}
              maxLength={30}
            />
            {errors.origin && <p className='danger'>{errors.origin}</p>}
          </div>
        </div>
        <DogCard dog={inputValue} />
      </form>
      {showAlert && <Alert message={'Succesfully created!'} />}
    </div>
  );
}

export default FormNewBreed;
