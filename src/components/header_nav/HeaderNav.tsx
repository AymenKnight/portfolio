'use client';

import { links } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useNavigationStore } from '@/services/stores/navigationStore';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeaderNavProps {}
export default function HeaderNav({}: HeaderNavProps) {
  const { activeNav, setActiveNav, setTimeOfLastClick } = useNavigationStore(
    (state) => state,
  );

  return (
    <header className="z-[999] relative">
      <motion.div
        className={cn(`header-nav   
      fixed top-0 left-1/2 -translate-x-1/2  
      w-full min-h-[3.25rem] bg-gray-200 rounded-none border border-gray-400 border-opacity-40 bg-opacity-80 backdrop-blur-[0.5rem] 
      sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full
      shadow-lg shadow-black/[0.03] 
      dark:bg-gray-600 dark:bg-opacity-75 dark:border-black/10
      `)}
        initial={{ opacity: 0, y: -100, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
      >
        <nav
          className="flex  h-full  
          py-2
          sm:py-0
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
                className={cn(
                  `h-3/4 flex items-center justify-center  px-4 py-1 transition-all relative `,
                )}
                key={link.hash}
              >
                <Link
                  className={cn(
                    `flex items-center justify-center  hover:text-gray-950 transition-all
                      dark:text-gray-300   dark:hover:text-gray-50   `,
                    link.hash === activeNav
                      ? 'text-gray-950  dark:text-gray-50 '
                      : '',
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveNav(link.hash);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {activeNav === link.hash && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-full bg-gray-50 dark:bg-gray-700 rounded-2xl -z-10 w-full"
                      layoutId="activeNav"
                      aria-hidden="true"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
