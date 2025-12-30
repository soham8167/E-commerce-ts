export interface CartItem {
  id: number;
  title: string;
  price: number  | undefined;
  image: string;
  weight : string  | undefined;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  removeItem: (id: number) => void;
}