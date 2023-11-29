import React from "react";

const CellSwatchDark: React.FC<{ code: string; label: string }> = ({
  code,
  label,
}) => {
  return (
    <div className="bg-gray-950 inline-flex rounded-xl p-1 text-white border border-gray-800 items-center text-md font-semibold gap-1.5 pr-3">
      <div className="p-1 border border-gray-800 rounded-lg">
        <div style={{ backgroundColor: code }} className="h-6 w-6 rounded" />
      </div>
      <span>{label}</span>
    </div>
  );
};

export default CellSwatchDark;
