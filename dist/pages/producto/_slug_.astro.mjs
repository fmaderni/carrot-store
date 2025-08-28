import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_B1sjFHFK.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DtiAEq6K.mjs';
import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../renderers.mjs';

const url = undefined                                   ;
const anon = undefined                                        ;
const supabase = createClient(url, anon);
function fileUrl(path) {
  if (!path) return "";
  const { data } = supabase.storage.from("products").getPublicUrl(path);
  return data.publicUrl;
}

const $$Astro = createAstro();
async function getStaticPaths() {
  const { data, error } = await supabase.from("products").select("slug").eq("is_active", true).gt("stock", 0);
  if (error) {
    console.error(error);
    return { params: [] };
  }
  return {
    params: (data ?? []).map((r) => ({ slug: r.slug }))
  };
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { data: items, error } = await supabase.from("products").select("*").eq("slug", slug).limit(1);
  if (error) {
    console.error(error);
    throw new Error("Error cargando producto");
  }
  const p = items?.[0];
  if (!p) throw new Error("Producto no encontrado");
  const fmt = new Intl.NumberFormat("es-UY", { style: "currency", currency: "UYU" });
  const coverUrl = fileUrl(p.cover);
  const imageUrls = (p.images ?? []).map((i) => fileUrl(i));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": p.title, "description": p.summary ?? p.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2"> <div class="space-y-4"> <img${addAttribute(coverUrl, "src")}${addAttribute(p.title, "alt")} class="w-full rounded-xl border" loading="eager"> ${imageUrls.filter((img) => img !== coverUrl).map((img) => renderTemplate`<img${addAttribute(img, "src")}${addAttribute(`${p.title} detalle`, "alt")} class="w-full rounded-xl border" loading="lazy">`)} </div> <div> <h1 class="text-3xl font-bold tracking-tight">${p.title}</h1> <p class="mt-2 text-2xl">${fmt.format(p.price)}</p> ${p.sizes?.length ? renderTemplate`<p class="mt-4 text-sm">Talles: <strong>${p.sizes.join(", ")}</strong></p>` : null} ${p.colors?.length ? renderTemplate`<p class="mt-2 text-sm">Colores: <strong>${p.colors.join(", ")}</strong></p>` : null} ${p.summary ? renderTemplate`<p class="mt-6 text-stone-700">${p.summary}</p>` : null} <a href="/catalogo" class="mt-8 inline-block rounded-lg border px-4 py-2">← Volver al catálogo</a> </div> </article> ` })}`;
}, "C:/Users/Federico/carrot-store/src/pages/producto/[slug].astro", void 0);

const $$file = "C:/Users/Federico/carrot-store/src/pages/producto/[slug].astro";
const $$url = "/producto/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
