import { useNavigationStore } from '@/services/stores/navigationStore';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionInViewProps {
  sectionName: string;
  threshold: number;
}
export const useSectionInView = ({
  sectionName,
  threshold,
}: SectionInViewProps) => {
  const { timeOfLastClick, setActiveNav } = useNavigationStore.getState();

  const { ref, inView } = useInView({
    threshold,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveNav(sectionName);
    }
    return () => {};
  }, [inView, sectionName, setActiveNav, timeOfLastClick]);
  return {
    ref,
    inView,
  };
};
