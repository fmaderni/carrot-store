import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL!;
const anon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(url, anon);

export function fileUrl(path?: string | null) {
  if (!path) return '';
  // bucket = 'products' (ajustá si usaste otro nombre)
  const { data } = supabase.storage.from('products').getPublicUrl(path);
  return data.publicUrl;
}
