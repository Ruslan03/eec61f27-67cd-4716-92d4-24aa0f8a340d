import React from "react";
import { TableContext } from "./context";
import { TableContextStateType } from "./@types/context";

const TableWrapper = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = React.useState<TableContextStateType>({
    editedRows: [],
    addedRows: [],
    newRowCount: 0,
  });

  return (
    <TableContext.Provider
      value={{
        state: state,
        updateState: setState,
      }}
    >
      <div className="w-full">
        <div className="flex flex-col gap-4">{children}</div>
      </div>
    </TableContext.Provider>
  );
};

export default TableWrapper;
