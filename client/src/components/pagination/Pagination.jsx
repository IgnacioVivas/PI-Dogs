import React from 'react';
import { Link } from 'react-router-dom';
import './pagination.scss';

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const setNewPageSelected = (number) => {
    paginate(number);
    const index = number - 1;
    const links = document.getElementsByClassName('page-link');
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = 'white';
    }
    links[index].style.color = '#C5ABA5';
  };

  return (
    <nav className='pagination-container'>
      <ul className='pagination' id='pagination'>
        {pageNumbers.map((number) => (
          <li className='page-item' key={number}>
            <Link to={`/home`} onClick={() => setNewPageSelected(number)} className='page-link'>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
