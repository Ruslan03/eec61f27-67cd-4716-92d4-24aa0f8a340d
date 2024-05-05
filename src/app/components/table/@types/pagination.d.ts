export type PaginationType = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  siblingCount?: number;
};

export type PageParamsType = {
  limit: number;
  page: number;
};

export interface IPaginationProps {
  total: number;
  page: number;
  limit: number;
  onPageChange: (_: PageParams) => void;
}
