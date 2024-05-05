export const apiResponse = (data: any, status: number, statusText: string) => {
  return Response.json(data, {
    status,
    statusText,
  });
};
