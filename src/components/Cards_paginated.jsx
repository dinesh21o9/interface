import React, { useState } from 'react';
import Pagination from './pagination';
import Card from './Card';
import data from '../data';

const Example = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; //No of cards per page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        currentPage={currentPage}
        paginate={paginate}
      />
      <ul>
        {currentData.map((prop) => (
          <Card
            heading={prop.heading}
            description={prop.description}
            summary = {prop.summary}
            link={prop.link}
            date={prop.date}
          />
        ))}
      </ul>

      
    </div>
  );
};

export default Example;
