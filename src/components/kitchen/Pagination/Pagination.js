import React, { useState } from "react";
import Pagination from "react-js-pagination";
import "./style.css";

export const PaginationComponent = ({ tableValues }) => {
  // Data to be rendered using pagination.
  const data = tableValues;
  const dataPerPage = 3;
  const [activePage, setCurrentPage] = useState(1);

  // Logic for displaying current todos
  const indexOfLastData = activePage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentTodos = data.slice(indexOfFirstData, indexOfLastData);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="pagination">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={3}
          totalItemsCount={data.length}
          pageRangeDisplayed={3}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};
