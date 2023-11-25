'use client';

import { skillsData } from '@/lib/data';
import SectionHeading from '../section_heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.05 },
  }),
};

interface SkillsProps {}
export default function Skills({}: SkillsProps) {
  const { ref } = useSectionInView({
    sectionName: '#skills',
    threshold: 1,
  });
  return (
    <section
      ref={ref}
      id="skills"
      className="flex flex-col items-center justify-center gap-5 max-w-[53rem] leading-8 scroll-mt-28 py-5 "
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="flex  flex-wrap gap-2 justify-center text-lg font-medium text-gray-800 dark:text-white/80">
        {skillsData.map((tag, index) => (
          <motion.span
            key={index}
            className="bg-white dark:bg-white/10  border border-black/[0.1]  tracking-wider  uppercase py-3 px-5 rounded-xl"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
