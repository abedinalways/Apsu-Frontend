import * as React from 'react';

const CloudIcon: React.FC<React.SVGProps<SVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#102B1C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M17.478 12h.022a4.5 4.5 0 1 1 0 9H7a5 5 0 0 1-.48-9.977M17.478 12q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 12a5.48 5.48 0 0 1-1.235 3M6.52 11.023Q6.757 11 7 11c1.126 0 2.165.372 3 1"
    ></path>
    <path
      stroke="#102B1C"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M3.868 12a5.1 5.1 0 0 1-.909-1.806c-.74-2.722.9-5.52 3.665-6.25m-3.665 6.25L2 10.447m4.624-6.502L6.367 3m.257.945A5.23 5.23 0 0 1 12 5.67m-8.523.653-1.013-.577m8.677-2.289-.584.998"
    ></path>
  </svg>
);

export default CloudIcon;
