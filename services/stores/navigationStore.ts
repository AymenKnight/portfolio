import { create } from 'zustand';

interface NavigationState {
  activeNav: string;
  setActiveNav: (activeNav: string) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: (timeOfLastClick: number) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeNav: '#home',
  timeOfLastClick: 0,
  setActiveNav: (activeNav) => set({ activeNav }),
  setTimeOfLastClick: (timeOfLastClick) => set({ timeOfLastClick }),
}));
