/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';

interface UserDescriptionProps {}
export default function UserDescription({}: UserDescriptionProps) {
  return (
    <motion.p
      className="text-2xl font-medium !leading-[1.4] sm:text-2xl"
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
    >
      <span className="font-bold"> Hello, I'm Aymen Daouadji</span>, a skilled
      <span className="font-bold"> software developer </span> with expertise in
      <span className="font-bold  ">
        {' '}
        Next, React, React Native, and NestJS.
      </span>
      <br />
      <span className="italic">
        I specialize in crafting web, mobile, and desktop applications,
        delivering innovative and user-centric solutions.
      </span>
    </motion.p>
  );
}
