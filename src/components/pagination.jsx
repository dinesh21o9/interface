import React, { useState } from 'react';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const [activePage, setActivePage] = useState(currentPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    paginate(pageNumber);
  };

  const handlePreviousPage = () => {
    if (activePage > 1) {
      const previousPage = activePage - 1;
      handlePageChange(previousPage);
    }
  };

  const handleNextPage = () => {
    if (activePage < totalPages) {
      const nextPage = activePage + 1;
      handlePageChange(nextPage);
    }
  };

  return (
    <div>
      <nav>
        <ul className="pagination">
          <li className={`page-item ${activePage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={handlePreviousPage}>
              <span className="arrow left"></span>
            </button>
          </li>
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <li key={pageNumber + 1} className={`page-item ${pageNumber + 1 === activePage ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(pageNumber + 1)}>
                {pageNumber + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${activePage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={handleNextPage}>
              <span className="arrow right"></span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
