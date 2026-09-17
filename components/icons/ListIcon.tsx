import * as React from 'react';

function ListIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={16}
        height={16}
      >
        <path d="M16 0H0v16h16V0z" fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.558 7.008a.64.64 0 01-1.116 0L4.037.954A.64.64 0 014.595 0h6.81a.64.64 0 01.558.954L8.558 7.008zm-1.55 1.55a.64.64 0 000-1.116L.954 4.037A.64.64 0 000 4.595v6.81c0 .49.527.797.954.558l6.054-3.405zm1.55.434a.64.64 0 00-1.116 0l-3.405 6.054a.64.64 0 00.558.954h6.81a.64.64 0 00.558-.954L8.558 8.992zm.434-1.55a.64.64 0 000 1.116l6.054 3.405a.64.64 0 00.954-.558v-6.81a.64.64 0 00-.954-.558L8.992 7.442z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default ListIcon;
