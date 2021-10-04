import styled from 'styled-components';

export const ContactContainer = styled.footer`
  background-color: #fff;
`;

export const ContactWrapper = styled.div`
  padding: 48px 24px 10px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const ContactTitle = styled.div`
  font-size: 60px;
  text-align: center;
  color: #e48a89;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  margin: 20px 20px 60px 20px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  flex-direction: column;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 240px;
  margin: 30px;
`;

const iconColors = {
  facebook: '#4267b2',
  github: '#333',
  linkedIn: '#0a66c2',
  email: '#ea4335',
};

export const SocialIconLink = styled.a`
  font-size: 24px;
  color: ${({ iconType }) => iconColors[iconType] || '#000'};
  margin: 0 20px;

  &:hover {
    transform: scale(1.5);
    transition: all 0.4s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    margin: 0 15px;
  }
`;

export const WebsiteRights = styled.small`
  color: #000;
  font-size: 11px;
`;
