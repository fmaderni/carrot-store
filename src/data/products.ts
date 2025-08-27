export type Product = {
  slug: string;
  titulo: string;
  categoria: "Pantalón" | "Remera" | "Campera";
  talle: "XS" | "S" | "M" | "L" | "XL";
  precio: number; // UYU
  fotos: string[];
  stock: number;
  descripcion?: string;
  color?: string;
};

export const products: Product[] = [
  {
    slug: "remera-band-90s",
    titulo: "Remera Band 90s",
    categoria: "Remera",
    talle: "M",
    precio: 650,
    fotos: ["https://picsum.photos/seed/rem1/800/1000"],
    stock: 1,
    color: "negra",
    descripcion: "Algodón suave, corte clásico."
  },
  {
    slug: "remera-striped",
    titulo: "Remera Rayas",
    categoria: "Remera",
    talle: "S",
    precio: 590,
    fotos: ["https://picsum.photos/seed/rem2/800/1000"],
    stock: 2,
    color: "azul",
    descripcion: "Rayas vintage, excelente estado."
  },
  {
    slug: "pantalon-denim-light",
    titulo: "Pantalón Denim Claro",
    categoria: "Pantalón",
    talle: "M",
    precio: 990,
    fotos: ["https://picsum.photos/seed/pan1/800/1000"],
    stock: 3,
    color: "celeste",
    descripcion: "Denim recto, tiro medio."
  },
  {
    slug: "pantalon-cargo-olive",
    titulo: "Pantalón Cargo Olive",
    categoria: "Pantalón",
    talle: "L",
    precio: 1190,
    fotos: ["https://picsum.photos/seed/pan2/800/1000"],
    stock: 0,
    color: "verde",
    descripcion: "Múltiples bolsillos, resistente."
  },
  {
    slug: "campera-denim-oversize",
    titulo: "Campera Denim Oversize",
    categoria: "Campera",
    talle: "L",
    precio: 1890,
    fotos: ["https://picsum.photos/seed/cam1/800/1000"],
    stock: 1,
    color: "azul",
    descripcion: "Oversize 90s, súper canchera."
  },
  {
    slug: "campera-windbreaker",
    titulo: "Campera Windbreaker",
    categoria: "Campera",
    talle: "M",
    precio: 1490,
    fotos: ["https://picsum.photos/seed/cam2/800/1000"],
    stock: 2,
    color: "roja",
    descripcion: "Liviana, rompe-viento."
  },
  {
    slug: "remera-basic-white",
    titulo: "Remera Básica Blanca",
    categoria: "Remera",
    talle: "XL",
    precio: 450,
    fotos: ["https://picsum.photos/seed/rem3/800/1000"],
    stock: 5,
    color: "blanca",
    descripcion: "Básica imprescindible."
  },
  {
    slug: "pantalon-slim-black",
    titulo: "Pantalón Slim Negro",
    categoria: "Pantalón",
    talle: "S",
    precio: 1090,
    fotos: ["https://picsum.photos/seed/pan3/800/1000"],
    stock: 1,
    color: "negro",
    descripcion: "Slim fit, versátil."
  }
];

export const formatUYU = (n: number) =>
  new Intl.NumberFormat("es-UY", { style: "currency", currency: "UYU" }).format(n);
