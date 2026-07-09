function Node({ cx, cy, label }: { cx: number; cy: number; label: string }) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r="26"
        fill="#FFFFFF"
        stroke="#2B7A6E"
        strokeWidth="1.5"
      />
      {/* <text x={cx} y={cy + 42} textAnchor="middle" fill="#1E4B45" fontSize="9">
        {label}
      </text> */}
    </g>
  );
}

export default function DiagramVisual() {
  return (
    <div></div>
  );
}
