import { FaExternalLinkAlt } from 'react-icons/fa';

import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsWrapper,
  ProjectCard,
  ProjectBackground,
  ProjectLinkIconContainer,
  ProjectLinkIcon,
  ProjectContent,
  ProjectContentDivider,
  ProjectTitle,
  ProjectDescription,
  ProjectTagsContainer,
  ProjectTagsTitle,
  ProjectTags,
} from './ProjectsComponents';
import { projects } from './Data';

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsTitle>Selected Projects</ProjectsTitle>
      <ProjectsWrapper>
        {projects.map((project) => (
          <ProjectCard key={project.title}>
            <ProjectBackground src={project.img} alt={project.title} />
            <ProjectLinkIconContainer>
              <ProjectLinkIcon>
                <FaExternalLinkAlt />
              </ProjectLinkIcon>
            </ProjectLinkIconContainer>
            <ProjectContent href={project.link} target='_blank'>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectContentDivider />
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTagsContainer>
                <ProjectTagsTitle>Tags:</ProjectTagsTitle>
                <ProjectTags>{project.tags.join(', ')}</ProjectTags>
              </ProjectTagsContainer>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
