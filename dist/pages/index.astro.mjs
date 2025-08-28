import { c as createComponent, b as createAstro, r as renderComponent, m as maybeRenderHead, a as renderTemplate, d as addAttribute } from '../chunks/astro/server_B1sjFHFK.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DtiAEq6K.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Inicio \u2014 Carrot", "lang": "en" }, { "default": ($$result2) => renderTemplate` <meta charset="utf-8"> <link rel="icon" type="image/svg+xml" href="/favicon.svg"> <meta name="viewport" content="width=device-width"> <meta name="generator"${addAttribute(Astro2.generator, "content")}> <title>Astro</title> ` })} ${maybeRenderHead()}<h1>Astro</h1> `;
}, "C:/Users/Federico/carrot-store/src/pages/index.astro", void 0);

const $$file = "C:/Users/Federico/carrot-store/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
