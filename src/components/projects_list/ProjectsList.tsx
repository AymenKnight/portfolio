import { projectsData } from '@/lib/data';
import SectionHeading from '../section_heading';
import ProjectItem from '../project_item';

interface ProjectsListProps {}
export default function ProjectsList({}: ProjectsListProps) {
  return (
    <section className="">
      <SectionHeading>My projects</SectionHeading>
      <div className="">
        {projectsData.map((project, index) => (
          <ProjectItem key={index} />
        ))}
      </div>
    </section>
  );
}
