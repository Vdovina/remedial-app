import React from 'react';
import Select from 'react-select';
import PrevIcon from '../../../assets/left-arrow.svg';
import NextIcon from '../../../assets/right-arrow.svg';
import './Pagination.scss';

interface PaginationProps {
  currentPage : number,
  setCurrentPage : (page : number) => void,
  pagesCount : number,
  totalItems : number,
  pageEntities : number,
  changePageEntitiesCount: (value : number) => void,
}

function Pagination({
  currentPage,
  setCurrentPage,
  pagesCount,
  totalItems,
  pageEntities,
  changePageEntitiesCount
} : PaginationProps) {

  const options = [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '50', value: 50 },
    { label: '100', value: 100 },
  ];

  const customSelectStyles = {
    control: (styles: any) => ({
      ...styles,
      minWidth: 80,
      borderColor: 'rgba(171, 171, 192, 0.3)',
      borderRadius: 6,
    })
  };

  return (
    <div className='table__pagination'>
      <div className='table__pagination-total'><span>Всего записей:</span> {totalItems}</div>

      <div className='table__pagination-page-count'>
        Показывать по:
        <Select
          className='table__pagination-page-count__select'
          value={options.find(o => o.value === pageEntities)}
          options={options}
          isSearchable={false}
          styles={customSelectStyles}
          menuPlacement='top'
          onChange={option => changePageEntitiesCount(option!.value)}
        />
      </div>

      <button
        className='table__pagination-pages-prev-btn'
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <img
          className='table__pagination-pages-prev-btn__icon'
          src={PrevIcon}
          alt='prev-page'
        /> 
      </button>
      <div className='table__pagination-pages'>
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage(1)}>1</button>
        )}

        {currentPage > 3 && (<span>...</span>)}

        {currentPage > 2 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>{currentPage - 1}</button>
        )}

        <button disabled>
          {currentPage}
        </button>

        {currentPage < pagesCount - 1 && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>{currentPage + 1}</button>
        )}

        {currentPage < pagesCount - 2 && (<span>...</span>)}

        {currentPage < pagesCount && (
          <button onClick={() => setCurrentPage(pagesCount)}>{pagesCount}</button>
        )}
      </div>
      <button
        className='table__pagination-pages-next-btn'
        disabled={currentPage === pagesCount}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <img
          className='table__pagination-pages-next-btn__icon'
          src={NextIcon}
          alt='next-page'
        />  
      </button>
    </div>
  );
}

export default Pagination;

