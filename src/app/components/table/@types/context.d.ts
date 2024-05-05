import { Dispatch, SetStateAction } from "react";

type TableContextStateType = {
  editedRows: any[];
  addedRows: any[];
  newRowCount: number;
};

type TableContextType = {
  state: TableContextStateType;
  updateState: Dispatch<SetStateAction<TableContextStateType>>;
};
