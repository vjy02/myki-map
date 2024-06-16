import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
  const supabase = createClient();
  const { data: stations } = await supabase.from("stations").select();

  return <pre>{JSON.stringify(stations, null, 2)}</pre>
}