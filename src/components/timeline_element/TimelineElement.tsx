import { useInView } from 'react-intersection-observer';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import './style/index.css';

interface TimelineElementProps {
  experience: {
    title: string;
    location: string;
    description: string;
    date: string;
    icon: JSX.Element;
  };
  index: number;
}
export default function TimelineElement({
  experience,
  index,
}: TimelineElementProps) {
  const { ref, inView } = useInView({});
  return (
    <div ref={ref} key={index} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        icon={experience.icon}
        date={experience.date}
        className="container-style "
        contentStyle={{
          background: '#f3f4f6',
          boxShadow: 'none',
          border: '1px solid rgb(0, 0, 0, 0.05)',
          textAlign: 'left',
          padding: '1.3rem 1rem',
        }}
        contentArrowStyle={{
          borderRight: '7px solid  rgb(33, 150, 243)',
        }}
        iconStyle={{
          background: 'white',
          fontSize: '1.5rem',
        }}
      >
        <h3 className="font-semibold capitalize">{experience.title}</h3>
        <p className="font-normal text-gray-500 !mt-1">{experience.location}</p>
        <p className="font-normal  text-gray-500 !mt-1">
          {experience.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}
