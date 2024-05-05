import React from "react";
import { ITableColumn } from "../@types/tbody";
import Item from "./item";
import { TableContext } from "../context";

function Body<D>({ columns, list, rowKey }: ITableColumn<D>) {
  const context = React.useContext(TableContext);

  const handleEditItem = (row: any, mode: "create" | "update") => {
    const path = mode === "update" ? "editedRows" : "addedRows";
    context.updateState((state) => {
      const flat = state[path].map((item) => item[rowKey]);

      if (flat.indexOf(row[rowKey]) > -1) {
        return {
          ...state,
          [path]: state[path].map((edited) => {
            if (edited[rowKey] === row[rowKey]) {
              edited = row;
            }

            return edited;
          }),
        };
      } else {
        return {
          ...state,
          [path]: [...state[path], row],
        };
      }
    });
  };

  const findEditedRow = (key: string, mode: "create" | "update") => {
    const path = mode === "update" ? "editedRows" : "addedRows";
    const findRow = context.state[path].filter((row) => row[rowKey] === key);
    return findRow.length ? findRow[0] : null;
  };

  const emptyColumns = columns.reduce(
    (a, v) => ({ ...a, [v.fieldName]: "" }),
    {}
  );

  return (
    <tbody className="text-sm md:text-base">
      {Array.from(new Array(context.state.newRowCount)).map((_, rowIndex) => (
        <tr key={rowIndex} className=" hover:bg-gray-100">
          {columns.map((column, i) => (
            <Item<D>
              key={i}
              column={column}
              rowData={{ ...emptyColumns, [rowKey]: `new-${rowIndex}` }}
              newRowData={findEditedRow(`new-${rowIndex}`, "create")}
              onInputChange={(rowItem) => handleEditItem(rowItem, "create")}
            />
          ))}
        </tr>
      ))}
      {(list || []).map((row: any, key) => (
        <tr key={key} className=" hover:bg-gray-100">
          {columns.map((column, i) => (
            <Item<D>
              key={i}
              column={column}
              rowData={row}
              newRowData={findEditedRow(row[rowKey] as string, "update")}
              onInputChange={(rowItem) => handleEditItem(rowItem, "update")}
            />
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default Body;
