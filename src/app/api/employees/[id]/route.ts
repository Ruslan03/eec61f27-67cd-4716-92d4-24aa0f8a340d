import { apiResponse } from "@/utils/api-response";
import { createClient } from "@/utils/supabase/client";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

const supabase = createClient();

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  const { id: employeeId } = params;
  const reqBody = await request.json();
  const { id, created_at, ...payload } = reqBody;

  const { data, status, statusText, error } = await supabase
    .from("employees")
    .update(payload)
    .eq("id", employeeId)
    .select();

  return apiResponse(data, status, statusText, error);
};
