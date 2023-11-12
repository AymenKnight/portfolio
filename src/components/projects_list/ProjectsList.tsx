import { projectsData } from '@/lib/data';
import SectionHeading from '../section_heading';
import ProjectItem from '../project_item';

interface ProjectsListProps {}
export default function ProjectsList({}: ProjectsListProps) {
  return (
    <section className="flex flex-col gap-10 items-center justify-center sm:max-w-[70rem]">
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
