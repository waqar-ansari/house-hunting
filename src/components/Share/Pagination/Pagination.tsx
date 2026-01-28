"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./pagination.module.css";
import { useState } from "react";

const Pagination = () => {
  //component state
  const [currentPage, setCurrentPage] = useState<number>(1);

  //handle next
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  //handle previous
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div className={styles.ic_pagination_wrap}>
      <div className={styles.ic_pagination}>
        <ul>
          <li>
            <button onClick={handlePrevious} disabled={currentPage === 1}>
              <IoIosArrowBack />
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage(1)}
              className={currentPage === 1 ? styles.ic_active : ""}
            >
              1
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage(2)}
              className={currentPage === 2 ? styles.ic_active : ""}
            >
              2
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage(3)}
              className={currentPage === 3 ? styles.ic_active : ""}
            >
              3
            </button>
          </li>
          <li>
            <button onClick={handleNext} disabled={currentPage === 3}>
              <IoIosArrowForward />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
