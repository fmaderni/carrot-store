import { c as createComponent, b as createAstro, d as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate } from './astro/server_B1sjFHFK.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                            */

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const SITE = "Carrot";
  const DEFAULT_DESC = "Ropa second hand";
  const {
    title,
    description,
    // opcional: pasá image desde cada página si querés OG/Twitter image
    image
  } = Astro2.props;
  const pageTitle = title ? `${title} | ${SITE}` : SITE;
  const pageDesc = description ?? DEFAULT_DESC;
  const canonical = Astro2.url?.href;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${pageTitle}</title><meta name="description"${addAttribute(pageDesc, "content")}>${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")}>`}<!-- Open Graph --><meta property="og:type" content="website"><meta property="og:site_name"${addAttribute(SITE, "content")}><meta property="og:title"${addAttribute(pageTitle, "content")}><meta property="og:description"${addAttribute(pageDesc, "content")}>${canonical && renderTemplate`<meta property="og:url"${addAttribute(canonical, "content")}>`}${image && renderTemplate`<meta property="og:image"${addAttribute(image, "content")}>`}<!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(pageTitle, "content")}><meta name="twitter:description"${addAttribute(pageDesc, "content")}>${image && renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>`}<!-- Color del navegador (opcional) --><meta name="theme-color" content="#f97316">${renderHead()}</head> <body class="min-h-dvh bg-orange-50 text-stone-900"> <header class="border-b border-orange-200"> <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"> <a href="/" class="text-2xl font-black">🥕 Carrot</a> <nav class="flex gap-5 text-sm"> <a href="/catalogo" class="hover:underline">Catálogo</a> <a href="/como-comprar" class="hover:underline">Cómo comprar</a> <a href="/contacto" class="hover:underline">Contacto</a> </nav> </div> </header> <main class="max-w-6xl mx-auto px-4 py-8"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="border-t border-orange-200"> <div class="max-w-6xl mx-auto px-4 py-6 text-sm">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Carrot — Montevideo
</div> </footer> </body></html>`;
}, "C:/Users/Federico/carrot-store/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
