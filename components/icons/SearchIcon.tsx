import * as React from 'react';

const SearchIcon: React.FC<React.SVGProps<SVGElement>> = _props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill="#6C6C6C"
      d="m19.28 18.22-3.841-3.841A8.7 8.7 0 0 0 17.5 8.75C17.5 3.925 13.575 0 8.75 0S0 3.925 0 8.75s3.925 8.75 8.75 8.75a8.7 8.7 0 0 0 5.629-2.061l3.841 3.841a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06M1.5 8.75c0-3.998 3.252-7.25 7.25-7.25S16 4.752 16 8.75 12.748 16 8.75 16 1.5 12.748 1.5 8.75"
    ></path>
  </svg>
);

export default SearchIcon;
