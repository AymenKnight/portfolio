'use client';

import { useNavigationStore } from '@/services/navigationStore';
import CircleAvatar from '../circle_avatar';
import UserDescription from '../user_description';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface IntroProps {}
export default function Intro({}: IntroProps) {
  const setActiveNav = useNavigationStore.getState().setActiveNav;

  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      setActiveNav('#home');
    }
    return () => {};
  }, [inView, setActiveNav]);
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
