import React from "react";
import Pagination from "react-js-pagination";
import Table  from "../Table/Table";
import "./Style.css";

export const PaginatedTable = ({ Columns, rows, isAdministorCompTable, isButtons }) => {
  console.log("Rows", rows);
  const data = rows;
  const dataPerPage = 4;
  const [activePage, setCurrentPage] = React.useState(1);
  // Logic for displaying current todos
  const indexOfLastData = activePage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);
  console.log("CurrentData", currentData);
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Table Columns={Columns} rows={currentData} isAdministorCompTable={isAdministorCompTable} />
      <div className="pagination">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={dataPerPage}
          totalItemsCount={data.length}
          pageRangeDisplayed={3}
          // hideNavigation="false"
          onChange={handlePageChange}
        />
        {/* <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 25, 30].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select> */}
      </div>
    </>
  );
};
