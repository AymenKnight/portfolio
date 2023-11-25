'use client';

import { BsMoon, BsSun } from 'react-icons/bs';
import TextButton from '../text_button';
import { motion } from 'framer-motion';
import { useModeStore } from '@/services/stores/modeStore';
import { useEffect } from 'react';

interface SwitchModeButtonProps {}
export default function SwitchModeButton({}: SwitchModeButtonProps) {
  const { mode, setMode } = useModeStore((state) => state);

  useEffect(() => {
    useModeStore.persist.rehydrate();
    if (
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      mode === undefined
    ) {
      setMode('dark');
    }
    if (mode === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [mode, setMode]);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <TextButton
        onClick={() => {
          setMode(mode === 'light' ? 'dark' : 'light');
        }}
        className="fixed bottom-5 right-3 bg-gray-200 dark:bg-gray-900 px-3 py-3
     w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem]
     border border-gray-200 border-opacity-40 shadow-2xl
    hover:scale-105 focus:scale-105 active:scale-100"
      >
        {mode == 'light' ? (
          <BsSun className="w-4 h-4 text-gray-900" />
        ) : (
          <BsMoon className="w-5 h-5 text-white " />
        )}
      </TextButton>
    </motion.div>
  );
}
