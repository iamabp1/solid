import React from "react";
import PropTypes from "prop-types";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import the arrow icons from react-icons

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 1; // Number of pages to show at start and end
    const delta = 1; // Pages around the current page

    for (let i = 1; i <= totalPages; i++) {
      if (
        i <= maxVisiblePages || // Start pages
        i > totalPages - maxVisiblePages || // End pages
        (i >= currentPage - delta && i <= currentPage + delta) // Pages around the current page
      ) {
        pageNumbers.push(i);
      } else if (
        pageNumbers[pageNumbers.length - 1] !== "..." // Avoid consecutive "..."
      ) {
        pageNumbers.push("...");
      }
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="row g-5 mt-20">
      <nav>
        <ul className="flex justify-center items-center space-x-2">
          {/* Previous Button */}
          <li
            className={`${
              currentPage === 1 ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) onPageChange(currentPage - 1);
              }}
              aria-label="Previous"
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <FiChevronLeft className="mr-2" /> 
            </a>
          </li>

          {/* Page Numbers */}
          {pageNumbers.map((page, index) => (
            <li
              key={index}
              className={`${
                page === currentPage
                  ? "bg-emerald-500 text-white"
                  : typeof page === "number"
                  ? "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                  : "pointer-events-none text-gray-500"
              } w-8 h-8 flex items-center justify-center rounded-lg`}
            >
              {typeof page === "number" ? (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange(page);
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {page}
                </a>
              ) : (
                <span>{page}</span>
              )}
            </li>
          ))}

          {/* Next Button */}
          <li
            className={`${
              currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) onPageChange(currentPage + 1);
              }}
              aria-label="Next"
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600"
            >
               <FiChevronRight className="ml-2" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
