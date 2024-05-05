import { TableContextStateType } from "./context";

export interface ITableToolbar {
  onSaveClick: (_: TableContextStateType) => Promise<void>;
}
