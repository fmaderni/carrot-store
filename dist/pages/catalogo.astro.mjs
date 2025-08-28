import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_B1sjFHFK.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DtiAEq6K.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const money = (value, currency = "UYU") => new Intl.NumberFormat("es-UY", { style: "currency", currency }).format(value);

const $$Astro$1 = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product } = Astro2.props;
  const agotado = product.stock !== void 0 && product.stock <= 0;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/producto/${product.slug}`, "href")} class="group block overflow-hidden rounded-xl border bg-white"> <div class="relative"> <img${addAttribute(product.imagen, "src")}${addAttribute(product.nombre, "alt")} class="aspect-square w-full object-cover transition group-hover:scale-[1.02]" loading="lazy"> ${agotado && renderTemplate`<span class="absolute left-2 top-2 rounded-md bg-stone-900/85 px-2 py-1 text-xs font-semibold text-white">Agotado</span>`} </div> <div class="p-3"> <h3 class="line-clamp-1 font-medium">${product.nombre}</h3> <p class="mt-1 text-sm text-stone-600"> ${(product.categoria || "").toUpperCase()} ${product.talle ? `\xB7 Talle ${product.talle}` : ""} </p> <p class="mt-2 font-semibold">${money(product.precio)}</p> </div> </a>`;
}, "C:/Users/Federico/carrot-store/src/components/ProductCard.astro", void 0);

const products = [
	{
		id: "pantalon-501-a",
		title: "Pantalón 501 Vintage",
		slug: "pantalon-501-vintage",
		category: "Pantalón",
		sizes: [
			"M"
		],
		priceUYU: 890,
		stock: 0,
		weight_g: 650,
		color: "Azul",
		condition: "Muy bueno",
		measurements: {
			cintura: 40,
			tiro: 30,
			largo: 102,
			bota: 19
		},
		images: [
			"/images/pantalon-501-a.jpg"
		]
	},
	{
		id: "remera-band-a",
		title: "Remera Band Tee",
		slug: "remera-band-tee",
		category: "Remera",
		sizes: [
			"S"
		],
		priceUYU: 450,
		stock: 1,
		weight_g: 180,
		color: "Negro",
		condition: "Bueno",
		measurements: {
			pecho: 48,
			largo: 66
		},
		images: [
			"/images/remera-band-a.jpg"
		]
	},
	{
		id: "campera-denim-a",
		title: "Campera Denim",
		slug: "campera-denim",
		category: "Campera",
		sizes: [
			"L"
		],
		priceUYU: 1290,
		stock: 2,
		weight_g: 900,
		color: "Azul claro",
		condition: "Excelente",
		measurements: {
			hombro: 48,
			pecho: 56,
			largo: 65
		},
		images: [
			"/images/campera-denim-a.jpg"
		]
	},
	{
		id: "pantalon-cargo-a",
		title: "Pantalón Cargo",
		slug: "pantalon-cargo",
		category: "Pantalón",
		sizes: [
			"L"
		],
		priceUYU: 990,
		stock: 1,
		weight_g: 700,
		color: "Verde oliva",
		condition: "Muy bueno",
		measurements: {
			cintura: 44,
			tiro: 31,
			largo: 104,
			bota: 22
		},
		images: [
			"/images/pantalon-cargo-a.jpg"
		]
	},
	{
		id: "remera-basic-a",
		title: "Remera Básica",
		slug: "remera-basica",
		category: "Remera",
		sizes: [
			"M",
			"L"
		],
		priceUYU: 390,
		stock: 4,
		weight_g: 160,
		color: "Blanco",
		condition: "Muy bueno",
		measurements: {
			pecho: 52,
			largo: 70
		},
		images: [
			"/images/remera-basic-a.jpg"
		]
	},
	{
		id: "campera-cuerina-a",
		title: "Campera Cuerina",
		slug: "campera-cuerina",
		category: "Campera",
		sizes: [
			"M"
		],
		priceUYU: 1390,
		stock: 1,
		weight_g: 1100,
		color: "Negro",
		condition: "Bueno",
		measurements: {
			hombro: 46,
			pecho: 54,
			largo: 64
		},
		images: [
			"/images/campera-cuerina-a.jpg"
		]
	}
];

const $$Astro = createAstro();
const $$Catalogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Catalogo;
  const params = Astro2.url.searchParams;
  const cat = params.get("categoria") || "";
  const talle = params.get("talle") || "";
  const q = (params.get("q") || "").toLowerCase().trim();
  const categorias = Array.from(new Set(products.map((p) => p.categoria).filter(Boolean)));
  const talles = Array.from(new Set(products.map((p) => p.talle).filter(Boolean)));
  let listado = products;
  if (cat) listado = listado.filter((p) => p.categoria === cat);
  if (talle) listado = listado.filter((p) => p.talle === talle);
  if (q) listado = listado.filter(
    (p) => [p.nombre, p.descripcion, p.categoria, p.talle].filter(Boolean).some((f) => String(f).toLowerCase().includes(q))
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Cat\xE1logo", "description": "Explor\xE1 el cat\xE1logo de Carrot." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1 class="text-3xl font-bold tracking-tight">Catálogo</h1> <form class="mt-6 grid gap-3 sm:grid-cols-4" method="get"> <select name="categoria" class="rounded-lg border px-3 py-2"> <option value="">Todas las categorías</option> ${categorias.map((c) => renderTemplate`<option${addAttribute(c === cat, "selected")}${addAttribute(c, "value")}>${c}</option>`)} </select> <select name="talle" class="rounded-lg border px-3 py-2"> <option value="">Todos los talles</option> ${talles.map((t) => renderTemplate`<option${addAttribute(t === talle, "selected")}${addAttribute(t, "value")}>${t}</option>`)} </select> <input name="q" placeholder="Buscar (ej: negro, denim)"${addAttribute(q, "value")} class="rounded-lg border px-3 py-2"> <div class="flex gap-2"> <button class="rounded-lg bg-orange-600 px-4 py-2 text-white">Filtrar</button> <a href="/catalogo" class="rounded-lg border px-4 py-2">Limpiar</a> </div> </form> ${listado.length === 0 ? renderTemplate`<p class="mt-8 text-stone-600">No hay resultados con esos filtros.</p>` : renderTemplate`<div class="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3"> ${listado.map((p) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": p })}`)} </div>`} </section> ` })}`;
}, "C:/Users/Federico/carrot-store/src/pages/catalogo.astro", void 0);

const $$file = "C:/Users/Federico/carrot-store/src/pages/catalogo.astro";
const $$url = "/catalogo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Catalogo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
