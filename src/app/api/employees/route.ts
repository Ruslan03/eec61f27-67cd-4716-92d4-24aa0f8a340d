import { apiResponse } from "@/utils/api-response";
import { createClient } from "@/utils/supabase/client";
import { NextRequest } from "next/server";

const supabase = createClient();

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;

  // pagination
  const limit = (Number(searchParams.get("limit")) || 0) - 1;
  const page = (Number(searchParams.get("page")) || 0) - 1;
  const start = page > 0 ? limit * page + page : page;
  const end = page > 0 ? limit * page + limit + page : limit;

  // sorting
  const sort = searchParams.get("sort");
  const fieldSort = sort?.replace("-", "") as string;
  const isAscending = sort?.charAt(0) === "-";

  const { data, status, statusText, count } = await supabase
    .from("employees")
    .select("*", {
      count: "exact",
    })
    .order(fieldSort, {
      ascending: isAscending,
    })
    .range(start, end);

  const result = {
    list: data,
    limit,
    page,
    total: count,
  };

  return apiResponse(result, status, statusText);
};

export const POST = async (request: NextRequest) => {
  const reqBody = await request.json();
  const { id, created_at, ...payload } = reqBody;

  const { data, status, statusText } = await supabase
    .from("employees")
    .insert(payload)
    .select();

  return apiResponse(data, status, statusText);
};
