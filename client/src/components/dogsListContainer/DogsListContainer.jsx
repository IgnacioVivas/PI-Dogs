import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../../redux/actions';
import Pagination from '../pagination/Pagination';
import DogsList from './dogsList/DogsList';

function DogsListContainer() {
  const dispatch = useDispatch();
  const { allDogs } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <DogsList allDogs={currentDogs} />
      <Pagination postsPerPage={postsPerPage} totalPosts={allDogs.length} paginate={paginate} />
    </div>
  );
}

export default DogsListContainer;
