import React from "react";
import PaginationButton from "./buttons";
import SelectLimit from "./select-limit";
import { IPaginationProps, PageParamsType } from "../@types/pagination";

const Pagination: React.FC<IPaginationProps> = ({
  total,
  page,
  limit,
  onPageChange,
}) => {
  const [pageParams, setPageParams] = React.useState<PageParamsType>({
    limit,
    page,
  });

  React.useEffect(() => onPageChange(pageParams), [pageParams]);
  return (
    <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row ">
      <div className="flex w-full items-center justify-center gap-2 text-sm md:justify-start ">
        <p>Show:</p>
        <div>
          <SelectLimit
            limit={pageParams.limit}
            onLimitChange={(limit) =>
              setPageParams((state) => ({
                ...state,
                limit,
                page: 1,
              }))
            }
          />
        </div>
        <p>per page of {total || 0} results</p>
      </div>

      <div className="flex w-full justify-center md:justify-end">
        <PaginationButton
          onPageChange={(page) =>
            setPageParams((state) => ({
              ...state,
              page,
            }))
          }
          totalCount={total || 0}
          pageSize={pageParams.limit}
          currentPage={pageParams.page}
        />
      </div>
    </div>
  );
};

export default Pagination;
