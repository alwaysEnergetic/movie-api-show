import React from "react";
import "../../styles.css";

const Pagination = ({ entriesPerPage, totalEntries, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalEntries / entriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="center">
        <ul className="pagination">
          {pageNumbers.map((number) => {
            return (
              <li key={number} className="page-item">
                <a
                  onClick={() => paginate(number)}
                  href="/#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
