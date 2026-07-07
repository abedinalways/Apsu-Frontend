import * as React from 'react';

const Arrow: React.FC<React.SVGProps<SVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 22 22"
  >
    <path
      fill="#00774D"
      d="M10.75 0C4.822 0 0 4.822 0 10.75S4.822 21.5 10.75 21.5 21.5 16.678 21.5 10.75 16.678 0 10.75 0m0 20c-5.101 0-9.25-4.149-9.25-9.25S5.649 1.5 10.75 1.5 20 5.649 20 10.75 15.851 20 10.75 20m4.692-8.963a.8.8 0 0 1-.162.244l-3 3a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.061l1.72-1.72H6.75a.75.75 0 0 1 0-1.5h6.189l-1.72-1.72a.75.75 0 0 1 1.061-1.061l3 3a.75.75 0 0 1 .162.818"
    ></path>
  </svg>
);

export default Arrow;
