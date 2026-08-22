import * as React from 'react';

const MessageIcon: React.FC<React.SVGProps<SVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="10"
    fill="none"
    viewBox="0 0 12 10"
  >
    <path
      fill="#3B3B3C"
      d="M9.188 9.625h-7C.777 9.625 0 8.848 0 7.438v-5.25C0 .777.777 0 2.188 0h7c1.41 0 2.187.777 2.187 2.188v5.25c0 1.41-.777 2.187-2.187 2.187m-7-8.75c-.92 0-1.313.393-1.313 1.313v5.25c0 .92.393 1.312 1.313 1.312h7c.92 0 1.312-.393 1.312-1.312v-5.25c0-.92-.393-1.313-1.312-1.313zm4.1 4.334 2.865-2.084a.437.437 0 1 0-.515-.708L5.773 4.501a.144.144 0 0 1-.171 0L2.736 2.417a.438.438 0 0 0-.515.708l2.866 2.084a1.02 1.02 0 0 0 1.2 0"
    ></path>
  </svg>
);

export default MessageIcon;
