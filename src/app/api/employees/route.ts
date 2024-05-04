import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const GET = async () => {
  const get = await supabase.from("employees").select();

  return Response.json(get);
};
