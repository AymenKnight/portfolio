'use client';

import Image from 'next/image';
import My from '@/toPng/my.jpg';
import { motion } from 'framer-motion';

interface CircleAvatarProps {}
export default function CircleAvatar({}: CircleAvatarProps) {
  return (
    <motion.div
      className="flex items-center justify-center 
  overflow-hidden relative  
  "
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, type: 'tween' }}
    >
      <Image
        src={My}
        alt="Aymen Daouadji"
        quality={95}
        width={180}
        height={180}
        priority={true}
        className=" border-gray-500 border-solid border-[0.35rem] shadow-sm  rounded-full
        w-[180px] h-[180px]  object-cover  "
      />
      <motion.div
        className="absolute bottom-5 right-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          type: 'spring',
          delay: 0.1,
          stiffness: 125,
        }}
      >
        <Image
          alt="Emoji"
          src="https://purecatamphetamine.github.io/country-flag-icons/3x2/PS.svg"
          quality={95}
          width={30}
          height={30}
        />
      </motion.div>
    </motion.div>
  );
}
