export type BaseListParams<T> = T & {
  page: number;
  limit: number;
  sort?: string;
};

export type BaseList<T> = {
  list: T[];
  page: number;
  limit: number;
  total: number;
};
