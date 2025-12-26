export interface Product {
  id: number;
  title: string;
  image: string;
  weight: string;
  originalPrice: number;
  price: number;
  discount: number;
  quantity: number;
  bestSeller?: boolean;
}


// veg store

export interface vegStoreState {
  products: Product[];
  increment: (id: number) => void;
  decrement: (id: number) => void;
}
