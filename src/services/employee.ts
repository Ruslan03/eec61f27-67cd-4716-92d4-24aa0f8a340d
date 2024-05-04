import { useMutation, useQuery } from "@tanstack/react-query";
import { BaseApiResponse, BaseListApiRequest } from "./@types/base";
import { EmployeeList } from "./@types/employee";
import api from ".";

export const GetList = (params: BaseListApiRequest) => {
  return useQuery<BaseApiResponse<EmployeeList[]>>({
    queryKey: ["employeeList", params],
    async queryFn() {
      const res = await api.get(`/employees?`, {
        params,
      });

      return res;
    },
    placeholderData: (prev) => prev,
  });
};
