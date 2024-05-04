export type BaseListApiRequest = {
  page: number;
  limit: number;
};

export type BaseApiResponse<T> = {
  data: T;
  status: number;
  statusText: string;
  error?: string | null;
  count?: number | null;
};
