'use client';
import { motion } from 'framer-motion';

interface HeaderNavProps {}
export default function HeaderNav({}: HeaderNavProps) {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="header-nav
      fixed top-0 left-1/2 -translate-x-1/2  
      w-full h-[4.5rem] bg-blue-300 rounded-none border border-white border-opacity-40 bg-opacity-80 backdrop-blur-[0.5rem] 
      sm:top-6 sm:h-[3.25rem] sm:w-[50rem] sm:rounded-full
      shadow-lg shadow-black/[0.03]
      "
        initial={{ opacity: 0, y: -100, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
      ></motion.div>
    </header>
  );
}
