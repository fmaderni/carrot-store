import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B1sjFHFK.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DtiAEq6K.mjs';
export { renderers } from '../renderers.mjs';

const $$ComoComprar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "C\xF3mo comprar" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-3xl px-4 py-10 prose"> <h1>Cómo comprar</h1> <ol> <li>Elegí tu prenda desde el <a href="/catalogo">catálogo</a>.</li> <li>Revisá medidas y fotos en fondo blanco (sin sorpresas).</li> <li>Pagá con MercadoPago o en efectivo si retirás por el local.</li> <li>Entrega: pick-up en Montevideo o envíos por zona/DAC.</li> <li>No hay cambios: cada prenda es única y está medida.</li> </ol> <h2>Envíos</h2> <ul> <li>Zonas de Montevideo: coordinamos por WhatsApp.</li> <li>Interior: DAC (costo a cargo del comprador).</li> </ul> </section> ` })}`;
}, "C:/Users/Federico/carrot-store/src/pages/como-comprar.astro", void 0);

const $$file = "C:/Users/Federico/carrot-store/src/pages/como-comprar.astro";
const $$url = "/como-comprar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ComoComprar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
