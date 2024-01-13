import { create } from 'zustand';

interface ShopListCountFilter {
  count: number;
  setFilterOption: (value: number) => void;
  setFilterDefault: () => void;
}

export const useShopListCountFilter = create<ShopListCountFilter>(set => ({
  count: 10,
  setFilterOption: (value: number) => set({ count: value }),
  setFilterDefault: () => set({ count: 10 }),
}));
