import { create } from 'zustand';
import { FavoriteItem } from '../types';

interface FavoritesState {
  items: FavoriteItem[];
  addItem: (item: FavoriteItem) => void;
  removeItem: (item: FavoriteItem) => void;
}

const useFavoritesStore = create<FavoritesState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (item) => set((state) => ({ items: state.items.filter((i) => i.title !== item.title) })),
}));

export default useFavoritesStore;
