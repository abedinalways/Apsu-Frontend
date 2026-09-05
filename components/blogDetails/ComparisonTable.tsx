interface ComparisonTableProps {
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export default function ComparisonTable({ tableData }: ComparisonTableProps) {
  if (!tableData || !tableData.headers || !tableData.rows) return null;

  // Responsive: on mobile, show as card layout; on desktop, show as table
  return (
    <div className="w-full overflow-x-auto ">
      {/* Desktop Table */}
      <table className="hidden md:table w-full border-collapse rounded-[12px] overflow-hidden shadow-sm ">
        <thead>
          <tr className="bg-secondary-text">
            {tableData.headers.map((header, idx) => (
              <th
                key={idx}
                className="px-5 py-4 text-left text-sm font-semibold text-white first:rounded-tl-[12px] last:rounded-tr-[12px]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={`${
                rowIdx % 2 === 0 ? 'bg-lightGreenColor' : 'bg-background'
              } border-b border-background last:border-b-0`}
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-5 py-4 text-sm text-bulletColor"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {tableData.rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="border border-background rounded-[12px] p-4 space-y-3 bg-white"
          >
            {tableData.headers.map((header, headerIdx) => (
              <div key={headerIdx} className="flex flex-col">
                <span className="text-xs font-semibold text-secondary-text uppercase tracking-wider mb-1">
                  {header}
                </span>
                <span className="text-sm text-bulletColor">
                  {row[headerIdx] || '-'}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
