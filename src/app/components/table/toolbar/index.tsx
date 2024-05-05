import React from "react";
import AddIcon from "../../icons/add";
import SaveIcon from "../../icons/save";
import ResetIcon from "../../icons/reset";
import { TableContext } from "../context";
import { ITableToolbar } from "../@types/toolbar";

function Toolbar<D>({ onSaveClick }: ITableToolbar) {
  const context = React.useContext(TableContext);
  const { editedRows, addedRows } = context.state;

  const disabledSave = !editedRows.length && !addedRows.length;

  const handleReset = () => {
    context.updateState((state) => ({
      ...state,
      editedRows: [],
      addedRows: [],
      newRowCount: 0,
    }));
  };

  const handleSave = async () => {
    await onSaveClick(context.state);
    handleReset();
  };

  const handleAddRow = () => {
    context.updateState((state) => ({
      ...state,
      newRowCount: state.newRowCount + 1,
    }));
  };

  return (
    <div className="flex gap-4 justify-end py-2 w-full">
      <Button onClick={handleAddRow}>
        <AddIcon />
      </Button>
      <Button isDisabled={disabledSave} onClick={handleSave}>
        <SaveIcon />
      </Button>
      <Button isDisabled={disabledSave} onClick={handleReset}>
        <ResetIcon />
      </Button>
    </div>
  );
}

const Button: React.FC<
  React.HTMLAttributes<HTMLButtonElement> & {
    isDisabled?: boolean;
  }
> = (props) => {
  const { isDisabled, ...newProps } = props;
  return (
    <button
      type="button"
      className="enabled:hover:bg-gray-100 p-2 rounded-full disabled:fill-gray-300 disabled:"
      disabled={props.isDisabled}
      {...newProps}
    >
      {props.children}
    </button>
  );
};

export default Toolbar;
