import React from "react";
import { ColumnType } from "../@types/tbody";

interface IItem<D> {
  column: ColumnType<D>;
  rowData: D | any;
  newRowData?: D | any;
  onInputChange: (_: D) => void;
  mode?: "create" | "update";
}

export default function Item<D>({
  column,
  rowData,
  newRowData,
  onInputChange,
}: IItem<D>) {
  const [openInput, setOpenInput] = React.useState(false);
  const { fieldName } = column;
  const isNewData = Boolean(newRowData);
  const data: any = isNewData ? newRowData : rowData;
  const isEditedField =
    isNewData && newRowData[fieldName] !== rowData[fieldName];

  return (
    <td
      className={`${isEditedField && "bg-green-400"} ${
        openInput && "border-blue-400"
      } border-2 border-t-0 border-x-0 first:border-l-2 last:border-r-2 text-nowrap p-4 text-sm relative cursor-default`}
      onClick={() => setOpenInput(true)}
    >
      <div className="min-h-5">{column.render(data)}</div>

      {openInput && (
        <Input
          autoFocus
          defaultValue={data[fieldName]}
          onBlur={(e) => {
            const newData = {
              ...data,
              [fieldName]: e.target.value,
            };
            onInputChange(newData);
            setOpenInput(false);
          }}
        />
      )}
    </td>
  );
}

const Input: React.FC<React.HTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      {...props}
      type="text"
      className="px-1 py-4 focus:outline-none absolute top-0 h-full w-full left-0"
    />
  );
};
