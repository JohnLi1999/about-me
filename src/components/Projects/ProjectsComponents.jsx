import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;

  @media screen and (max-width: 1000px) {
    height: 1050px;
  }

  @media screen and (max-width: 768px) {
    height: 1500px;
  }

  @media screen and (max-width: 480px) {
    height: 1200px;
  }

  @media screen and (max-width: 350px) {
    height: 1100px;
  }
`;

export const ProjectsTitle = styled.div`
  font-size: 60px;
  text-align: center;
  color: #e48a89;
  margin: -200px 0 100px 0;

  @media screen and (max-width: 1000px) {
    margin: -70px 0 100px 0;
    font-size: 48px;
  }

  @media screen and (max-width: 768px) {
    margin: -50px 0 100px 0;
    font-size: 48px;
  }

  @media screen and (max-width: 480px) {
    margin: 50px 0 100px 0;
    font-size: 48px;
  }

  @media screen and (max-width: 300px) {
    margin: -100px 0 100px 0;
    font-size: 48px;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 30px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    pad: 0 20px;
  }
`;

export const ProjectCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 350px;
  margin-bottom: 15px;
  overflow: hidden;
  position: relative;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
  }
`;

export const ProjectBackground = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const ProjectLinkIconContainer = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 35px;
  height: 35px;
  background-color: #01bf71;
  border-radius: 3px;
  border-top-right-radius: 10px;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    width: 25px;
    height: 25px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ProjectLinkIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
  text-decoration: none;
`;

export const ProjectContent = styled.a`
  opacity: 0%;
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  background-color: rgba(14, 114, 72, 0.85);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 100%;
  }

  @media screen and (max-width: 480px) {
    padding: 0 30px;
  }
`;

export const ProjectContentDivider = styled.hr`
  border-top: 1px solid #fff;
  border-radius: 3px;
  width: 100%;
  margin: 10px 0;
`;

export const ProjectTitle = styled.div`
  font-size: 30px;
  font-weight: 400;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 15px;

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ProjectTagsContainer = styled.div`
  padding: 30px 0;

  @media screen and (max-width: 480px) {
    padding: 30px 0 0 0;
  }
`;

export const ProjectTagsTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 5px;
  }
`;

export const ProjectTags = styled.p`
  font-size: 15px;

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;
