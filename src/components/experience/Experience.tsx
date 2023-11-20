'use client';

import SectionHeading from '../section_heading';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import TimelineElement from '../timeline_element';
import { useSectionInView } from '@/lib/hooks';

interface ExperienceProps {}
export default function Experience({}: ExperienceProps) {
  const { ref } = useSectionInView({
    sectionName: '#experience',
    threshold: 0.8,
  });
  return (
    <section
      ref={ref}
      id="experience"
      className="flex flex-col items-center justify-center gap-5 w-full leading-8 scroll-mt-28 py-5 "
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="rgb(209 213 219)" animate={true}>
        {experiencesData.map((experience, index) => (
          <TimelineElement key={index} experience={experience} index={index} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
