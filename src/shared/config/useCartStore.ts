import create from 'zustand';

interface CartItem {
  imageUrl: string;
  title: string;
  price: number;
  borderColor: string;
}

interface CartState {
  items: CartItem[];
  cartSum: number;
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
  toggleCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  cartSum: 0,
  addItem: (item) => set((state) => ({ items: [...state.items, item], cartSum: state.cartSum + item.price })),
  removeItem: (item) => set((state) => ({ items: state.items.filter(i => i !== item), cartSum: state.cartSum - item.price })),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));

export default useCartStore;
