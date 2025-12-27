export interface WishlistItem {
  id: number;
  title: string;
  price: number;
  image: string;
  weight: string;
}

export interface WishlistState {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
}