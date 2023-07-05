import React, { useState } from 'react';
import Pagination from './pagination';
import Card from './Card'; 
import data from '../data';

const Example = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Check if data is defined and has length greater than 0
  const currentData = data && data.length > 0 ? data.slice(indexOfFirstItem, indexOfLastItem) : [];

  return (
    <div>
      <h1>Pagination Example</h1>
      <div className="card-container">
        <ul>
            {currentData.map((props) => ( <Card  heading={props.type} description={props.content} date={props.date} link={props.link} /> ))}
        </ul>
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data ? data.length : 0}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default Example;
