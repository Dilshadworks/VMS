import React from "react";
import Styles from "./Style.css";
import Pagination from "react-js-pagination";
 
export function MyTable({ data, heads }) {
  // const records = data;
  // const recordsPerPage = 4;
  // const [activePage, setCurrentPage] = React.useState(1);
 
  // Logic for displaying current todos
  // const indexOfLastrecords = activePage * recordsPerPage;
  // const indexOfFirstrecords = indexOfLastrecords - recordsPerPage;
  // const currentrecords = records.slice(indexOfFirstrecords, indexOfLastrecords);
  // console.log("Currentrecords", currentrecords);
 
  // const handlePageChange = (pageNumber) => {
  //   console.log(`active page is ${pageNumber}`);
  //   setCurrentPage(pageNumber);
  // };
  return (
    <>
      <table className="table">
        <thead className="thead">
          <tr className="tr">
            {heads.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((tcell, index) => (
                <td key={index}>{tcell}</td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfooter>
          <div className="pagination">
            <Pagination
              activePage={activePage}
              itemsCountPerPage={recordsPerPage}
              totalItemsCount={records.length}
              pageRangeDisplayed={3}
              onChange={handlePageChange}
            />
          </div>
        </tfooter> */}
      </table>
    </>
  );
}