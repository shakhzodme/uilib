import React from "react";

const CellSwatchLight: React.FC<{ code: string; label: string }> = ({
  code,
  label,
}) => {
  return (
    <div className="bg-white inline-flex rounded-xl p-1 text-gray-900 border border-gray-200 items-center text-md font-semibold gap-1.5 pr-3">
      <div className="p-1 border border-gray-200 rounded-lg">
        <div style={{ backgroundColor: code }} className="h-6 w-6 rounded" />
      </div>
      <span>{label}</span>
    </div>
  );
};

export default CellSwatchLight;
