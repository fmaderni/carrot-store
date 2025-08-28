import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B1sjFHFK.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DtiAEq6K.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contacto \u2014 Carrot", "description": "Escribinos por WhatsApp e Instagram" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold mb-4">Contacto</h1> <p class="mb-6">Estamos en Montevideo. Escribinos por:</p> <ul class="space-y-3"> <li> <a href="https://wa.me/598" class="underline">WhatsApp</a> </li> <li> <a href="https://instagram.com/" class="underline">Instagram</a> </li> <li> <a href="mailto:hola@carrot.com" class="underline">Email</a> </li> </ul> ` })}`;
}, "C:/Users/Federico/carrot-store/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/Federico/carrot-store/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
