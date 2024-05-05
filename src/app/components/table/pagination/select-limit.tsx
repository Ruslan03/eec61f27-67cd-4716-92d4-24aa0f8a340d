import React from "react";

const limits = [10, 25, 50, 75, 100];
const SelectLimit: React.FC<{
  limit: number;
  onLimitChange: (_: number) => void;
}> = ({ limit, onLimitChange }) => {
  return (
    <select
      defaultValue={String(limit || 10)}
      className="border-2 p-2 rounded-md border-dark-light text-sm md:text-base"
      onChange={(e) => {
        const limit = Number(e.target.value);
        onLimitChange(limit);
      }}
    >
      {limits.map((limit) => (
        <option key={limit} value={limit}>
          {limit}
        </option>
      ))}
    </select>
  );
};

export default SelectLimit;
