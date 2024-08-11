import ProjectCard from "./ProjectCard";
import Heading from '@theme/Heading';
import projects from './projects' 

export default function ProjectsList() {
  return (
    <div className="ProjectsList">
      <Heading as="h3">My Open Source Projects</Heading>
      <div>
        {projects.map((project, idx) => <ProjectCard key={idx} project={project}/>)}
      </div>
    </div>
  )
}