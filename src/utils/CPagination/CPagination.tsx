import React from "react";
import CButton from "../CButton/CButton";
import {
  FiChevronLeft,
  FiChevronRight,
  FiSkipBack,
  FiSkipForward,
} from "react-icons/fi";

const CPagination: <T>(props: {
  data?: any;
  totalPages: number;
  currentPage: number;
  itemsPerPage?: number;
  handlePageChange: (newPage: number) => void;
}) => JSX.Element = ({
  data,
  totalPages,
  currentPage,
  itemsPerPage = 10,
  handlePageChange,
}) => {
  // data={
  //   count: 10
  //   totalPages: 1
  //   currentPage: 1
  //   previous: null
  //   next: null
  // }
  return (
    <>
      <div className="flex md:justify-end justify-center items-center mt-4 gap-4">
        <CButton
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          variant="solid"
        >
          <span className="text-lg">
            <FiSkipBack />
          </span>
        </CButton>

        <CButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="solid"
        >
          <span className="text-md">
            <FiChevronLeft />
          </span>
        </CButton>

        <section className="flex justify-center items-center gap-2">
          <button className="py-2 px-[0.875rem] text-white rounded-full text-sm bg-light-primary">
            {currentPage}
          </button>
          /
          <button className="text-white rounded-full text-sm bg-light-primary py-2 px-[0.875rem]">
            {totalPages}
          </button>
        </section>

        <CButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="solid"
        >
          <span className="text-md">
            <FiChevronRight />
          </span>
        </CButton>

        <CButton
          onClick={() => {
            const lastPage = Math.ceil(data?.count / itemsPerPage);
            handlePageChange(lastPage);
          }}
          disabled={data?.next === null}
          variant="solid"
        >
          <span className="text-lg">
            <FiSkipForward />
          </span>
        </CButton>
      </div>
    </>
  );
};

export default CPagination;

// import React from "react";
// import {
//   FiChevronLeft,
//   FiChevronRight,
//   FiSkipBack,
//   FiSkipForward,
// } from "react-icons/fi";
// import CButton from "../CButton/CButton";

// const CPagination: <T>(props: {
//   data?: any;
//   currentPage: number;
//   itemsPerPage?: number;
//   handlePageChange: (newPage: number) => void;
// }) => JSX.Element = ({
//   data,
//   currentPage,
//   itemsPerPage = 10,
//   handlePageChange,
// }) => {
//     return (
//       <>
//         <div className="flex md:justify-end justify-center items-center mt-4 gap-4">
//           <CButton
//             variant="solid"
//             onClick={() => handlePageChange(1)}
//             disabled={currentPage === 1}
//           >
//             <span className="text-lg">
//               <FiSkipBack />
//             </span>
//           </CButton>

//           <CButton
//             variant="solid"
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             <span className="text-md">
//               <FiChevronLeft />
//             </span>
//           </CButton>

//           <section className="flex justify-center items-center gap-2">
//             <button className="py-2 px-[0.875rem] text-white rounded-full text-sm bg-cyan-950">
//               {currentPage}
//             </button>
//             /
//             <button className="text-white rounded-full text-sm bg-cyan-950 py-2 px-[0.875rem]">
//               {data?.totalPages}
//             </button>
//           </section>

//           <CButton
//             variant="solid"
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === Math.ceil(data?.count / itemsPerPage)}
//           >
//             <span className="text-md">
//               <FiChevronRight />
//             </span>
//           </CButton>

//           <CButton
//             variant="solid"
//             onClick={() =>
//               handlePageChange(Math.ceil(data?.count / itemsPerPage))
//             }
//             disabled={currentPage === Math.ceil(data?.count / itemsPerPage)}
//           >
//             <span className="text-lg">
//               <FiSkipForward />
//             </span>
//           </CButton>
//         </div>
//       </>
//     );
//   };

// export default CPagination;
