'use client';

import CircleAvatar from '../circle_avatar';
import UserDescription from '../user_description';
import { useSectionInView } from '@/lib/hooks';

interface IntroProps {}
export default function Intro({}: IntroProps) {
  const { ref } = useSectionInView({
    sectionName: '#home',
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      id="home"
      className="flex  flex-col items-center justify-center  gap-5 max-w-[54rem]  px-6 scroll-mt-28 "
    >
      <CircleAvatar />
      <UserDescription />
    </section>
  );
}
