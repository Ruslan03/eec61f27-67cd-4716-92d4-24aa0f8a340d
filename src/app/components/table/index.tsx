import React from "react";
import Head from "./thead";
import Body from "./tbody";
import TableWrapper from "./wrapper";
import { BaseListParams } from "@/services/@types/base";
import Pagination from "./pagination";
import { HeadType, SortType } from "./@types/thead";
import BlankState from "./blank-state";
import LoadingState from "./blank-state/loading-state";
import { ITable } from "./@types/table";
import Toolbar from "./toolbar";

const Table = <T, D>({
  query,
  initialParams,
  columns,
  sort,
  rowKey,
  onSaveChanges,
}: ITable<T, D>) => {
  const [params, setParams] = React.useState<BaseListParams<T>>({
    ...initialParams,
    sort: sortToParam(sort),
  });
  const { data, isFetching, isError, error } = query(params);

  const { list, total, limit, page } = data?.data || {};

  const header: HeadType[] = columns.map((col) => ({
    fieldName: col.fieldName,
    headerTitle: col.headerTitle,
  }));

  return (
    <TableWrapper>
      <div className="min-h-0 flex-grow overflow-auto relative">
        <Toolbar onSaveClick={onSaveChanges} />
        <table className=" w-full xs:table-fixed">
          <Head
            header={header}
            sort={paramToSort(params?.sort || "")}
            onSortChange={(newSort) => {
              setParams((state) => ({
                ...state,
                sort: sortToParam(newSort),
              }));
            }}
          />

          {isFetching && <LoadingState />}
          {isError && <BlankState caption={error.message} />}

          <Body<D> columns={columns} list={list as D[]} rowKey={rowKey} />
        </table>
      </div>
      <div>
        <Pagination
          total={total || 0}
          limit={limit || initialParams.limit}
          page={page || initialParams.page}
          onPageChange={(pageParams) =>
            setParams((currentParams) => ({
              ...currentParams,
              ...pageParams,
            }))
          }
        />
      </div>
    </TableWrapper>
  );
};

const sortToParam = (sort: SortType) => {
  return `${sort[1] === "ASC" ? "-" : ""}${sort[0]}`;
};

const paramToSort = (sort: string): SortType => {
  return [sort.replace("-", ""), sort.charAt(0) === "-" ? "ASC" : "DESC"];
};
export default Table;
