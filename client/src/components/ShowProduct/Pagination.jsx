import React, { useState } from 'react';

export default function Pagination({
  productsPerPage,
  totalProducts,
  paginate,
}) {
  const [pageNumber, setPageNumber] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div id='pagination'>
      <ul className='pagination'>
        <li
          className='page-item'
          onClick={() => {
            if (pageNumber === 1) return;
            setPageNumber(pageNumber - 1);
            paginate(pageNumber - 1);
          }}>
          <i className='fas fa-chevron-left' />
        </li>
        {pageNumbers.map((number) => (
          <li
            className={number === pageNumber ? 'page-item active' : 'page-item'}
            key={number}
            onClick={() => {
              paginate(number);
              setPageNumber(number);
            }}>
            {number}
          </li>
        ))}
        <li
          className='page-item'
          onClick={() => {
            if (pageNumber === pageNumbers.length) return;
            paginate(pageNumber + 1);
            setPageNumber(pageNumber + 1);
          }}>
          <i className='fas fa-chevron-right' />
        </li>
      </ul>
    </div>
  );
}
