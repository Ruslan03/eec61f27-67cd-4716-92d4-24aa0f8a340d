"use client";
import Table from "@/app/components/table";
import { Employee, EmployeeListParams } from "@/services/@types/employee";
import { Create, GetList, Update } from "@/services/employee";
import React from "react";
import columns from "./columns";
import { TableContextStateType } from "@/app/components/table/@types/context";
import { useQueryClient } from "@tanstack/react-query";

const TableList = () => {
  const { mutateAsync: updateEmployee } = Update();
  const { mutateAsync: createEmployee } = Create();
  const initialParams = {
    limit: 10,
    page: 1,
  };
  const queryClient = useQueryClient();
  const handleSaveChange = async (data: TableContextStateType) => {
    const { editedRows, addedRows } = data;

    if (editedRows.length) {
      // save edited employee
      await Promise.all(editedRows.map((row) => updateEmployee(row)));
    }

    if (addedRows.length) {
      // save new employee
      await Promise.all(addedRows.map((row) => createEmployee(row)));
    }

    // refetch employee data
    await queryClient.invalidateQueries({ queryKey: ["employeeList"] });
  };
  return (
    <Table<EmployeeListParams, Employee>
      rowKey="id"
      query={GetList}
      columns={columns}
      initialParams={initialParams}
      sort={["last_name", "DESC"]}
      onSaveChanges={handleSaveChange}
    />
  );
};

export default TableList;
