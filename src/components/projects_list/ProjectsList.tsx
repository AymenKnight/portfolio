'use client';

import { projectsData } from '@/lib/data';
import SectionHeading from '../section_heading';
import ProjectItem from '../project_item';
import { useSectionInView } from '@/lib/hooks';

interface ProjectsListProps {}
export default function ProjectsList({}: ProjectsListProps) {
  const { ref } = useSectionInView({
    sectionName: '#projects',
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="flex flex-col gap-10 items-center justify-center sm:max-w-[70rem] scroll-mt-28"
    >
      <SectionHeading>My projects</SectionHeading>
      <div className="flex flex-col gap-5">
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
