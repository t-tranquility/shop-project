import create from 'zustand';

interface CartState {
  items: Array<{
    imageUrl: string;
    title: string;
    price: number;
    borderColor: string;
  }>;
  addItem: (item: {
    imageUrl: string;
    title: string;
    price: number;
    borderColor: string;
  }) => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
}));

export default useCartStore;
