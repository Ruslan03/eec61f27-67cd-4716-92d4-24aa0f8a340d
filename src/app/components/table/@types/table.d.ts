import { BaseListParams } from "@/services/@types/base";
import { UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ColumnType } from "./tbody";
import { ITableToolbar } from "./toolbar";

export interface ITable<T, D> {
  initialParams: BaseListParams<T>;
  query: (
    _: BaseListParams<T>
  ) => UseQueryResult<AxiosResponse<BaseList<D>, any>, Error>;
  columns: ColumnTypee<D>[];
  sort: SortType;
  rowKey: string;
  onSaveChanges: ITableToolbar["onSaveClick"];
}
