import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({pageNumber, setPageNumber}) => {
  return (
    <ReactPaginate 
    className='pagination justify-content-center gap-4 my-4' 
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    breakLabel ='...'
    nextLabel='Next' 
    previousLabel='Prev' 
    nextClassName='btn btn-primary next' 
    previousClassName='btn btn-primary prev' 
    pageClassName='page-item' 
    pageLinkClassName='page-link' 
    marginPagesDisplayed={4}
    pageRangeDisplayed={4}
    activeClassName='active'
    onPageChange={(data) => {
        setPageNumber(data.selected + 1);
    }}
    pageCount={17} 
    />
  )
}

export default Pagination