'use client';

import TextButton from '../buttons/text_button';
import { BsArrowRight, BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useNavigationStore } from '@/services/stores/navigationStore';

interface ControlsSectionProps {}
export default function ControlsSection({}: ControlsSectionProps) {
  const router = useRouter();
  const { setActiveNav, setTimeOfLastClick } = useNavigationStore.getState();

  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center  flex-grow gap-3 text-base font-medium"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <TextButton
        className=" group bg-gray-900 dark:bg-gray-700  hover:bg-gray-950 hover:scale-110 focus:scale-110 active:scale-105  text-white 
         border border-black/10  "
        text="Contact me here"
        onClick={() => {
          setActiveNav('#contact');
          setTimeOfLastClick(Date.now());
          router.push('#contact');
        }}
      >
        <BsArrowRight className=" opacity-70  group-hover:translate-x-1 transition " />
      </TextButton>
      <a href="/cv.pdf" download={true}>
        <TextButton
          className="group bg-white dark:bg-white/80  hover:scale-110 focus:scale-110 active:scale-105  text-gray-900 border border-black/10"
          text="Download CV"
        >
          <HiDownload className=" opacity-70  group-hover:translate-x-1 transition " />
        </TextButton>
      </a>
      <div className="flex flex-row items-center gap-3">
        <a
          href="https://www.linkedin.com/in/aymen-daouadji-64b684173/"
          target="_blank"
        >
          <TextButton className="bg-white dark:bg-white/80  p-3 text-gray-700 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 hover:scale-110 focus:scale-110 active:scale-105 border border-black/10 ">
            <BsLinkedin className="w-5 h-5" />
          </TextButton>
        </a>
        <a href="https://github.com/daouadji506" target="_blank">
          <TextButton className="bg-white dark:bg-white/80   p-3 text-gray-700 hover:text-gray-900 focus:text-gray-900 active:text-gray-900 text-[1.25rem] hover:scale-110 focus:scale-110 active:scale-105 border border-black/10 ">
            <BsGithub className="w-5 h-5" />
          </TextButton>
        </a>
      </div>
    </motion.div>
  );
}
