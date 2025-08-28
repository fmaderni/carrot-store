import { supabase } from "./supabase";

export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  category: string;
  size: string | null;
  color: string | null;
  price_uyu: number;
  weight_g: number | null;
  images: string[] | null;
  stock: number;
  created_at: string;
};

export async function fetchProducts(filters: { categoria?: string; talle?: string; q?: string } = {}) {
  let q = supabase.from("products").select("*").order("created_at", { ascending: false });
  if (filters.categoria) q = q.eq("category", filters.categoria);
  if (filters.talle) q = q.eq("size", filters.talle);
  if (filters.q) q = q.or(`title.ilike.%${filters.q}%,description.ilike.%${filters.q}%`);
  const { data, error } = await q;
  if (error) throw error;
  return data as Product[];
}

export async function fetchProductBySlug(slug: string) {
  const { data, error } = await supabase.from("products").select("*").eq("slug", slug).single();
  if (error) throw error;
  return data as Product;
}
