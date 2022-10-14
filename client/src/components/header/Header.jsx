import React, { useState } from 'react';
import backgroundHeader from '../../images/background-header.jpg';
import './header.scss';
import imgInput from '../../images/dogs.png';
import searchIcon from '../../images/search-line.svg';
import NavBar from './navBar/NavBar';
import Filters from '../filters/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { sortData } from '../../redux/actions';

function Header() {
  const dispatch = useDispatch();
  const { allDogsBackUp } = useSelector((state) => state);
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => setInputValue(e.target.value);
  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) doSearch();
  };
  const resetSearch = () => setInputValue('');
  const doSearch = () => {
    dispatch(
      sortData(
        allDogsBackUp.filter((item) => item?.name?.toLowerCase().includes(inputValue.toLowerCase()))
      )
    );
    resetSearch();
    document.querySelector('#dogs-list-container').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className='header-container' style={{ backgroundImage: `url(${backgroundHeader})` }}>
      <NavBar />
      <h1>
        Learn, search and create the best <br /> breeds of dogs
      </h1>
      <div className='input-container'>
        <img src={imgInput} alt='' />
        <div className='input-wrapper'>
          <input
            type='text'
            placeholder='search dog breeds'
            name='searchValue'
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleOnKeyDown}
          />
          <img id='search' src={searchIcon} alt='' onClick={doSearch} />
        </div>
      </div>
      <Filters />
    </div>
  );
}

export default Header;
