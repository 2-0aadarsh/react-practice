import { useState } from "react";
import { products } from "./products";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(4);

  const productsPerPage = 10;
  const productList = products.slice(
    (currentPage - 1) * productsPerPage,
    (currentPage - 1) * productsPerPage + productsPerPage,
  );

  const totalPage = Math.ceil(products.length / productsPerPage);

  const pageNumbers = Array.from(
    { length: totalPage },
    (_, index) => index + 1,
  );

  console.log("page numbers are ", pageNumbers);
  console.log("products size are ", products.length);
  console.log("total products per pages are ", productsPerPage);
  console.log("total pages are ", totalPage);
  console.log("productList of current page are ", productList);

  return (
    <div className="w-full h-full bg-slate-800 text-white p-8 flex flex-col items-start gap-4">
      {/* // here we will render the porducts as a card : 
      {productList.map((product) => (
        // displaying all the details : 
      ))} */}

      <div className="flex items-center gap-5">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-2 py-1 rounded border outline-none"
          >
            prev
          </button>
        )}

        {currentPage <= totalPage - 1 && (
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-2 py-1 rounded border outline-none"
          >
            Next
          </button>
        )}

        {pageNumbers.map((pageNumber) => (
          <button
            onClick={() => setCurrentPage(pageNumber)}
            key={pageNumber}
            className={
              currentPage === pageNumber ? "text-pink-500 underline mb-1" : ""
            }
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
