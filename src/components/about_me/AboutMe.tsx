/* eslint-disable react/no-unescaped-entities */
'use client';

import SectionHeading from '../section_heading';
import { motion } from 'framer-motion';
import { useNavigationStore } from '@/services/navigationStore';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface AboutMeProps {}
export default function AboutMe({}: AboutMeProps) {
  const setActiveNav = useNavigationStore.getState().setActiveNav;

  const { ref, inView } = useInView({
    threshold: 0.8,
  });
  useEffect(() => {
    if (inView) {
      setActiveNav('#about');
    }
    return () => {};
  }, [inView, setActiveNav]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="flex flex-col items-center justify-center gap-5 max-w-[45rem] leading-8 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p>
        With a Bachelor's degree in{' '}
        <span className="font-medium">Computer Science</span> and a Master's in
        <span className="font-medium"> Network Engineering</span>, I bring a
        solid educational foundation to my extensive software development
        experience. I excel in web development with{' '}
        <span className="font-medium">React, JavaScript, and TypeScript</span>,
        and I'm skilled in front-end development using{' '}
        <span className="font-medium">CSS, SCSS, and Tailwind.</span>
        For mobile apps, I use <span className="font-medium">React Native</span>
        , and I'm well-versed in desktop app development with{' '}
        <span className="font-medium">Electron.js, Tauri, and JavaFX. </span>
        Additionally, I have strong back-end skills with{' '}
        <span className="font-medium">Nest.js.</span> I'm passionate about
        learning, eager to tackle new challenges, and excited about expanding my
        horizons in the ever-evolving tech world.
      </p>
    </motion.section>
  );
}
