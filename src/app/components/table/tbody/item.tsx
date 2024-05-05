import React from "react";
import { ColumnType, InputRule } from "../@types/tbody";

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
  const [error, setError] = React.useState("");
  const isError = Boolean(error.length);

  return (
    <td
      className={` ${isEditedField && !isError && "bg-green-400"} ${
        isError && "bg-red-200"
      } ${
        openInput && "border-blue-400"
      } border-2 border-t-0 border-x-0 first:border-l-2 last:border-r-2 text-nowrap p-4 text-sm relative cursor-default`}
      onClick={() => setOpenInput(true)}
    >
      <div className="min-h-5">{column.render(data)}</div>

      {openInput && (
        <Input
          autoFocus
          defaultValue={data[fieldName]}
          onBlur={async (e) => {
            setError("");
            const { value } = e.target;

            if (column.rule) {
              const validRule = ruleValidation(column.rule, value);
              if (validRule !== true) {
                setError(validRule.toString());
              }
            }

            const newData = {
              ...data,
              [fieldName]: value,
            };
            onInputChange(newData);
            setOpenInput(false);
          }}
        />
      )}

      {isError && (
        <div className="w-[calc(100%-5px)] absolute left-0 bottom-0 p-2 rounded-md z-30 translate-y-full bg-red-500">
          <p className="text-xs text-white">{error}</p>
        </div>
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

const ruleValidation = (rule: InputRule, value: string): boolean | string => {
  if (rule.required && !value.length) {
    return "Field is required";
  }

  if (rule.pattern && !value.toLowerCase().match(rule.pattern)) {
    return "Input value is not valid";
  }

  return true;
};
