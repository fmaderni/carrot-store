export type CartItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  qty: number;
  cover_url?: string | null;
};

const KEY = "carrot_cart";

export function getCart(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("cart:updated"));
}

export function addToCart(item: Omit<CartItem, "qty">, qty = 1) {
  const cart = getCart();
  const i = cart.findIndex((x) => x.id === item.id);
  if (i >= 0) cart[i].qty += qty;
  else cart.push({ ...item, qty });
  saveCart(cart);
}

export function removeFromCart(id: string) {
  saveCart(getCart().filter((x) => x.id !== id));
}

export function setQty(id: string, qty: number) {
  const cart = getCart();
  const i = cart.findIndex((x) => x.id === id);
  if (i >= 0) {
    cart[i].qty = Math.max(1, qty);
    saveCart(cart);
  }
}

export function clearCart() {
  saveCart([]);
}

export function cartCount() {
  return getCart().reduce((a, b) => a + b.qty, 0);
}

export function cartTotal() {
  return getCart().reduce((a, b) => a + (b.price || 0) * b.qty, 0);
}
