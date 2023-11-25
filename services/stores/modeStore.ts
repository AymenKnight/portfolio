'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ModeState {
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
}

export const useModeStore = create<ModeState>()(
  persist(
    (set) => {
      return {
        mode: undefined as unknown as 'light' | 'dark',
        setMode: (mode) => {
          if (mode === 'light') {
            document.documentElement.classList.remove('dark');
          } else {
            document.documentElement.classList.add('dark');
          }
          set({ mode });
        },
      };
    },
    {
      name: 'mode',
      skipHydration: true,
    },
  ),
);
