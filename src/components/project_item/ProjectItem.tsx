'use client';
import { useSectionInView } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { useScroll, motion, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';

interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
}
export default function ProjectItem({
  title,
  description,
  tags,
  imageUrl,
}: ProjectItemProps) {
  const { ref: sectionRef } = useSectionInView({
    sectionName: '#projects',
    threshold: 0.7,
  });
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0.8 1'],
  });
  const transform = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity: transform, scale: transform }}
      className="group"
    >
      <motion.section
        ref={sectionRef}
        className="  flex flex-col   gap-5 sm:justify-between relative
      bg-gray-100 hover:bg-gray-200 transition rounded-2xl overflow-hidden border border-black/5 shadow-sm 
        dark:bg-gray-100/40 dark:hover:bg-gray-200/30
      "
      >
        <div
          className="absolute hidden sm:block inset-0 bg-cover bg-center filter blur-sm h-[20rem] max-h-[20rem] sm:h-[26rem] sm:max-h-[26rem] "
          style={{ backgroundImage: `url(${imageUrl.src})` }}
        ></div>
        <Image
          src={imageUrl}
          alt={title}
          quality={100}
          className={cn(
            `w-full h-[20rem] max-h-[20rem]    sm:h-[26rem]  sm:max-h-[26rem]  object-center  object-fill sm:object-contain
          group-hover:scale-x-[1.05] 
            transition self-end brightness-100
          `,
            title === 'Lotus Launcher' && 'object-contain',
          )}
        />
        <div className="flex flex-col gap-3 pl-2 sm:pl-8 sm:pr-2 w-full">
          <h3 className="text-2xl font-semibold dark:text-white  ">{title}</h3>
          <p className="text-lg font-medium text-gray-700 dark:text-white/80 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-1 pb-5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm font-medium text-white dark:text-white/80 bg-black/[0.7] tracking-wider text-[0.7rem] px-3 uppercase py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
