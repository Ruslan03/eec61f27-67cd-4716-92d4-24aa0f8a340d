import { createContext } from "react";
import { TableContextType } from "./@types/context";

export const TableContext = createContext<TableContextType>({
  state: {
    editedRows: [],
    addedRows: [],
    newRowCount: 0,
  },
  updateState: () => {},
});
