import { create } from 'zustand';

interface NavigationState {
  activeNav: string;
  setActiveNav: (activeNav: string) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeNav: '#home',
  setActiveNav: (activeNav) => set({ activeNav }),
}));
