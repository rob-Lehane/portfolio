import ProjectCard from './ProjectCard';
import projectList from './projectList';
import './css/Projects.css'

function Projects() {
  return (
    <>
      <ul className="project-list">
        {projectList.map((proj) => (
          <li key={proj.title}>
            <ProjectCard
              title={proj.title}
              desc={proj.desc}
              images={proj.images}
              links={proj.links}
              stack={proj.stack}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Projects;