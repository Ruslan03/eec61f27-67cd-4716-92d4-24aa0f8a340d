import React from "react";
import { ITHead } from "../@types/thead";

const Head: React.FC<ITHead> = ({ header, sort, onSortChange }) => {
  return (
    <thead className="border-2 text-left">
      <tr className="text-sm cursor-pointer">
        {header.map((th, i) => {
          const isActiveSort = th.fieldName === sort[0];
          const direction = isActiveSort ? sort[1] : "";

          return (
            <th
              key={i}
              className={`text-nowrap font-semibold text-gray-600 p-4 hover:bg-gray-100 min-w-[calc(100/10)] ${
                isActiveSort && "text-black font-bold"
              }`}
              onClick={() => {
                onSortChange([
                  th.fieldName,
                  isActiveSort ? (sort[1] === "ASC" ? "DESC" : "ASC") : "ASC",
                ]);
              }}
            >
              {th.headerTitle}
              <SortIcon direction={direction} />
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

const SortIcon: React.FC<{ direction: string | "ASC" | "DESC" }> = ({
  direction,
}) => {
  if (direction === "ASC") return <span>&uarr;</span>; // up
  if (direction === "DESC") return <span>&darr;</span>; // down
  return <span></span>;
};

export default Head;
