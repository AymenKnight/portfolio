'use client';

import { links } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeaderNavProps {}
export default function HeaderNav({}: HeaderNavProps) {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="header-nav
        flex items-center justify-center
      fixed top-0 left-1/2 -translate-x-1/2  
      w-full min-h-[3.25rem] bg-white rounded-none border border-white border-opacity-40 bg-opacity-80 backdrop-blur-[0.5rem] 
      sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full
      shadow-lg shadow-black/[0.03] 
      "
        initial={{ opacity: 0, y: -100, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
      >
        <nav
          className="flex  h-full  
          py-0
          flex-grow
         flex-row items-center justify-center "
        >
          <ul
            className="flex flex-row items-center justify-center gap-5 sm:justify-between flex-wrap sm:w-full sm:p-8 w-fit
            gap-y-0.5
           sm:flex-nowrap 
           text-[0.9rem] text-gray-500 font-medium
          "
          >
            {links.map((link) => (
              <li
                className="h-3/4 flex items-center justify-center "
                key={link.hash}
              >
                <Link
                  className=" flex items-center justify-center px-2 py-1 hover:text-gray-950 transition"
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
