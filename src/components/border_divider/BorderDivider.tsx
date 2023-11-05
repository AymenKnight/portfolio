'use client';
import { motion } from 'framer-motion';

interface BorderDividerProps {}
export default function BorderDivider({}: BorderDividerProps) {
  return (
    <motion.div
      className="w-1 h-20 bg-gray-300 hidden sm:block rounded-full  my-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
