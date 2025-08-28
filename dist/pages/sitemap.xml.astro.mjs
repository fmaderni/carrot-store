export { renderers } from '../renderers.mjs';

const pages = [
  "/",
  "/catalogo",
  "/como-comprar",
  "/contacto"
];
const GET = () => {
  const base = "https://carrot-store.pages.dev";
  const urls = pages.map((p) => `
    <url><loc>${base}${p}</loc><changefreq>weekly</changefreq></url>
  `).join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml" } }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
