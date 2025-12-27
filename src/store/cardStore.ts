import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartState } from "../type/cardStoretype";


export const useCartStore = create<CartState>()(
  persist (
    (set) => ({
      items: [],

      addToCart: (product) =>
        set((state) => {
          const existing = state.items.find(i => i.id === product.id);

          if (existing) {
            return {
              items: state.items.map(i =>
                i.id === product.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }

          return {
            items: [...state.items, { ...product, quantity: 1 }],
          };
        }),

      increment: (id) =>
        set((state) => ({
          items: state.items.map(i =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        })),

      // 🔒 Decrement stops at 1
      decrement: (id) =>
        set((state) => ({
          items: state.items.map(i =>
            i.id === id && i.quantity > 1
              ? { ...i, quantity: i.quantity - 1 }
              : i
          ),
        })),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter(i => i.id !== id),
        })),
    }),
    {
      name: "bhoomi-cart-storage", // 👈 localStorage key
    }
  )
);
