import { useState } from 'react';
import imgUno from '../../../images/gallery-1.jpg';
import imgDos from '../../../images/gallery-2.png';
import imgTres from '../../../images/gallery-4.jpg';
import imgCuatro from '../../../images/gallery-6.jpg';
import './select.scss';
import dropDown from '../../../images/arrow-drop-down-line.svg';

function Select({
  orderAlphabetically,
  filterByExistingOrNot,
  allTemperaments,
  sortByTemperament,
  sortByWeight,
}) {
  const [selectOne, setSelectOne] = useState(false);
  const [selectTwo, setSelectTwo] = useState(false);
  const [selectThree, setSelectThree] = useState(false);
  const [selectFour, setSelectFour] = useState(false);

  const openSelect = (index) => {
    switch (index) {
      case 'one':
        document.getElementById('one').style.display = !selectOne ? 'block' : 'none';
        setSelectOne(!selectOne);
        break;
      case 'two':
        document.getElementById('two').style.display = !selectTwo ? 'block' : 'none';
        setSelectTwo(!selectTwo);
        break;
      case 'three':
        document.getElementById('three').style.display = !selectThree ? 'block' : 'none';
        setSelectThree(!selectThree);
        break;
      case 'four':
        document.getElementById('four').style.display = !selectFour ? 'block' : 'none';
        setSelectFour(!selectFour);
        break;
      default:
        break;
    }
  };

  return (
    <div className='gallery-wrapper'>
      <div className='img-gallery'>
        <img src={imgCuatro} alt='' className='image-filters' id='last-image' />
        <div className='select uno' onClick={() => openSelect('one')}>
          <div>
            <span>sort by temperament</span>
            <img src={dropDown} alt='' />
          </div>
          <ul className='unorderedList' id='one'>
            {allTemperaments?.map((item, index) => (
              <li onClick={() => sortByTemperament(item)} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='img-gallery' id='white-img'>
        <img src={imgDos} alt='' className='image-filters' />
        <div className='select dos' onClick={() => openSelect('two')}>
          <div>
            <span>sort by breed</span>
            <img src={dropDown} alt='' />
          </div>
          <ul className='unorderedList' id='two'>
            <li onClick={() => filterByExistingOrNot('existing')}>existing</li>
            <li onClick={() => filterByExistingOrNot('created')}>created</li>
          </ul>
        </div>
      </div>
      <div className='img-gallery'>
        <img src={imgTres} alt='' className='image-filters' />
        <div className='select tres' onClick={() => openSelect('three')}>
          <div>
            <span>sort alphabetically</span>
            <img src={dropDown} alt='' />
          </div>
          <ul className='unorderedList' id='three'>
            <li onClick={() => orderAlphabetically('AZ')}>A-Z</li>
            <li onClick={() => orderAlphabetically('ZA')}>Z-A</li>
          </ul>
        </div>
      </div>
      <div className='img-gallery'>
        <img src={imgUno} alt='' className='image-filters' />
        <div className='select cuatro' onClick={() => openSelect('four')}>
          <div>
            <span>sort by weight</span>
            <img src={dropDown} alt='' />
          </div>
          <ul className='unorderedList theLastUl' id='four'>
            <li onClick={() => sortByWeight('ascending')}>ascending</li>
            <li onClick={() => sortByWeight('descending')}>descending</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Select;
