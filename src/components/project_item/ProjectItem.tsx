'use client';
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
        className="  flex flex-col-reverse sm:flex-row sm:group-even:flex-row-reverse gap-5 sm:justify-between
      bg-gray-100 hover:bg-gray-200 transition sm:pt-8 rounded-2xl overflow-hidden border border-black/5 "
      >
        <div className="flex flex-col gap-3 pl-2 sm:pl-8 sm:pr-2">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-lg font-medium text-gray-700 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-1 pb-5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm font-medium text-white bg-black/[0.7] tracking-wider text-[0.7rem] px-3 uppercase py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={100}
          className="w-full max-h-[20rem] sm:max-h-none sm:h-[28rem]  sm:max-w-[50%] group-odd:rounded-tl-2xl shadow-2xl object-center  object-fill group-even:rounded-tr-2xl
        group-hover:scale-[1.05] 
         sm:group-hover:translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-1
         sm:group-even:group-hover:-translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-1
          transition self-end "
        />
      </motion.section>
    </motion.div>
  );
}
