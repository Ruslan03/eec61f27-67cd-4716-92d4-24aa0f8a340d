export const apiResponse = (
  data: any,
  status: number,
  statusText: string,
  error?: any
) => {
  return Response.json(data || error, {
    status,
    statusText,
  });
};
