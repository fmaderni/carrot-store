import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B1sjFHFK.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DtiAEq6K.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "P\xE1gina no encontrada", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-20 text-center"> <h1 class="text-3xl font-bold">404</h1> <p class="mt-2 text-stone-600">No encontramos lo que buscabas.</p> <a href="/" class="mt-6 inline-block rounded-lg bg-orange-600 px-5 py-3 text-white">Ir al inicio</a> </div> ` })}`;
}, "C:/Users/Federico/carrot-store/src/pages/404.astro", void 0);

const $$file = "C:/Users/Federico/carrot-store/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
