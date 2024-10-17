import React from 'react';

const Pagination = ({ totalPages, currentPage, paginate }) => {
  return (
    <div className="pagination-buttons">
      {Array.from({ length: totalPages }, (_, index) => (
        <button key={index + 1} onClick={() => paginate(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;