import { useQuery, useMutation } from "@tanstack/react-query";
import { Employee, EmployeeListParams } from "./@types/employee";
import api from ".";
import { BaseList, BaseListParams } from "./@types/base";

export const GetList = (params: BaseListParams<EmployeeListParams>) => {
  return useQuery({
    queryKey: ["employeeList", params],
    async queryFn() {
      const res = await api.get<BaseList<Employee>>(`/employees`, {
        params,
      });

      return res;
    },
    placeholderData: (prev) => prev,
  });
};

export const Create = () => {
  return useMutation({
    async mutationFn(payload: Employee) {
      const res = await api.post(`/employees`, payload);

      return res;
    },
  });
};

export const Update = () => {
  return useMutation({
    async mutationFn(payload: Employee) {
      const res = await api.put(`/employees/${payload.id}`, payload);

      return res;
    },
  });
};
