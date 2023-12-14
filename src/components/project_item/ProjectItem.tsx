'use client';
import { useSectionInView } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { useScroll, motion, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';
import TextButton from '../buttons/text_button';
import { BsArrowRight, BsGithub } from 'react-icons/bs';

interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
}
export default function ProjectItem({
  title,
  description,
  tags,
  imageUrl,
  liveDemoUrl,
  sourceCodeUrl,
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
        className={cn(
          '  flex flex-col   gap-5 sm:justify-between relative',
          ' bg-gray-100 hover:bg-gray-200 transition rounded-2xl overflow-hidden border border-black/5 shadow-sm ',
          ' dark:bg-gray-100/40 dark:hover:bg-gray-200/30 ',
        )}
      >
        <div
          className={cn(
            'absolute hidden sm:block inset-0 bg-cover bg-center filter blur-sm h-[10rem] max-h-[10rem] sm:h-[26rem] sm:max-h-[26rem] ',
            title === 'Lotus Launcher' && 'block',
          )}
          style={{ backgroundImage: `url(${imageUrl.src})` }}
        ></div>
        <Image
          src={imageUrl}
          alt={title}
          quality={100}
          className={cn(
            `w-full h-[10rem] max-h-[10rem]    sm:h-[26rem]  sm:max-h-[26rem]  object-center  object-fill sm:object-contain
          sm:group-hover:scale-x-[1.05] 
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
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm font-medium text-white dark:text-white/80 bg-black/[0.7] tracking-wider text-[0.7rem] px-3 uppercase py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:justify-end gap-2 sm:gap-4 px-4  py-5 sm:pr-5">
            <a href={liveDemoUrl} target="_blank">
              <TextButton
                text={liveDemoUrl ? 'Live Demo' : 'No Demo available'}
                className={cn(
                  ' group/demo bg-gray-900     text-white border border-black/10 font-medium grow w-full ',
                  liveDemoUrl &&
                    'hover:bg-gray-950 hover:scale-[1.05] focus:scale-[1.05] active:scale-105  sm:hover:scale-110 sm:focus:scale-110 sm:active:scale-105',
                )}
                disabled={!liveDemoUrl}
              >
                {liveDemoUrl && (
                  <BsArrowRight className=" opacity-70  group-hover/demo:translate-x-1 transition " />
                )}
              </TextButton>
            </a>
            <a href={sourceCodeUrl} target="_blank">
              <TextButton
                text={sourceCodeUrl ? 'Source Code' : 'Private Project'}
                className={cn(
                  'group/demo bg-gray-900 text-white border border-black/10 font-medium grow w-full ',
                  sourceCodeUrl &&
                    ' hover:bg-gray-950 hover:scale-[1.05] focus:scale-[1.05] active:scale-105  sm:hover:scale-110 sm:focus:scale-110 sm:active:scale-105',
                )}
                disabled={!sourceCodeUrl}
              >
                {sourceCodeUrl && <BsGithub className="w-5 h-5" />}
              </TextButton>
            </a>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
