// for vegstore
import { create } from 'zustand'

import c1 from '../assets/images/c1.png';
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import z3 from "../assets/images/z3.png";
import z2 from "../assets/images/z2.png";
import z1 from "../assets/images/z1.png";
import z4 from "../assets/images/z4.png";
import z5 from "../assets/images/z5.png";
import z6 from "../assets/images/z6.png";
import z7 from "../assets/images/z7.png";
import z8 from "../assets/images/z8.png";
import z9 from "../assets/images/z9.png";
import z10 from "../assets/images/z10.png";
import z11 from "../assets/images/z11.png";
import type { vegStoreState } from "../type/vegtype";

export const vegStore = create<vegStoreState>((set) =>({
    products: [
    {
      id: 1,
      title: "Ooty Baby Potato",
      image: c1,
      weight: "1Kg",
      originalPrice: 120,
      price: 80,
      discount: 20,
      quantity: 1,
      bestSeller: true,
    },
    {
      id: 2,
      title: "Ooty Baby Potato",
      image: z3,
      weight: "1Kg",
      originalPrice: 120,
      price: 80,
      discount: 20,
      quantity: 1,
      bestSeller: true,
    },
    {
      id: 3,
      title: "Ooty Baby Potato",
      image: z2,
      weight: "1Kg",
      originalPrice: 120,
      price: 80,
      discount: 20,
      quantity: 1,
      bestSeller: true,
    },
    {
      id: 4,
      title: "Ooty Baby Potato",
      image: z1,
      weight: "1Kg",
      originalPrice: 120,
      price: 80,
      discount: 20,
      quantity: 1,
      bestSeller: true,
    },
    {
      id: 5,
      title: "Ooty Baby Potato",
      image: z10,
      weight: "1Kg",
      originalPrice: 120,
      price: 80,
      discount: 20,
      quantity: 1,
      bestSeller: true,
    },
    {
      id: 6,
      title: "Ooty Baby Potato",
      image: z4,
      weight: "1Kg",
      originalPrice: 120,
      price: 80,
      discount: 20,
      quantity: 1,
      bestSeller: true,
    },
    {
      id: 7,
      title: "Ooty Baby Potato",
      image: z1,
      weight: "1Kg",
      originalPrice: 120,
      price: 80,
      discount: 20,
      quantity: 1,
      bestSeller: true,
    },
    {
      id: 8,
      title: "Ooty Baby Potato",
      image: c2,
      weight: "1Kg",
      originalPrice: 120,
      price: 80,
      discount: 20,
      quantity: 1,
      bestSeller: true,
    },
    {
      id: 9,
      title: "Ooty Baby Potato",
      image: c3,
      weight: "1Kg",
      originalPrice: 120,
      price: 80,
      discount: 20,
      quantity: 1,
    },
    {
      id: 10,
      title: "Ooty Baby Potato",
      image: z9,
      weight: "1Kg",
      originalPrice: 120,
      price: 80,
      discount: 20,
      quantity: 1,
    },
    {
      id: 11,
      title: "Ooty Baby Potato",
      image: z8,
      weight: "1Kg",
      originalPrice: 120,
      price: 80,
      discount: 20,
      quantity: 1,
      bestSeller: true,
    },
    {
      id: 12,
      title: "Ooty Baby Potato",
      image: z7,
      weight: "1Kg",
      originalPrice: 120,
      price: 80,
      discount: 20,
      quantity: 1,
      bestSeller: true,
    },
    {
      id: 13,
      title: "Ooty Baby Potato",
      image: z6,
      weight: "1Kg",
      originalPrice: 120,
      price: 80,
      discount: 20,
      quantity: 1,
      bestSeller: true,
    },
    {
      id: 14,
      title: "Ooty Baby Potato",
      image: z5,
      weight: "1Kg",
      originalPrice: 120,
      price: 80,
      discount: 20,
      quantity: 1,
    },
    {
      id: 15,
      title: "Ooty Baby Potato",
      image: z11,
      weight: "1Kg",
      originalPrice: 120,
      price: 80,
      discount: 20,
      quantity: 1,
      bestSeller: true,
    },
    
  ],
increment: (id) =>
    set((state) => ({
      products: state.products.map((item) =>
        
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  decrement: (id) =>
    set((state) => ({
      products: state.products.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
}))



