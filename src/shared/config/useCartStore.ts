import create from 'zustand';

interface CartItem {
  imageUrl: string;
  title: string;
  price: number;
  borderColor: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (item) => set((state) => ({ items: state.items.filter(i => i !== item) })),
}));

export default useCartStore;
