export const money = (value: number, currency = "UYU") =>
  new Intl.NumberFormat("es-UY", { style: "currency", currency }).format(value);
