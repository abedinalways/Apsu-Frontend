import * as React from 'react';

const ArrowIcon: React.FC<React.SVGProps<SVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="10"
    fill="none"
    viewBox="0 0 13 10"
  >
    <path
      fill="#102B1C"
      d="M12.59 4.618a1 1 0 0 0-.217-.325l-4-4A1 1 0 1 0 6.96 1.708L9.252 4H1a1 1 0 0 0 0 2h8.252L6.959 8.294A1 1 0 0 0 8.372 9.71l4-4a1 1 0 0 0 .216-.325 1 1 0 0 0 .001-.766"
    ></path>
  </svg>
);

export default ArrowIcon;
