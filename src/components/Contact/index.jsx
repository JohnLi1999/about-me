import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

import {
  ContactContainer,
  ContactWrapper,
  ContactTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  WebsiteRights,
} from './ContactComponents';
import {
  LINKEDIN_LINK,
  GITHUB_LINK,
  FACEBOOK_LINK,
  MAILTO_LINK,
} from '../../constants';

const Contact = () => {
  return (
    <ContactContainer id='contact'>
      <ContactWrapper>
        <ContactTitle light={+false}>My Contact</ContactTitle>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink
                href={LINKEDIN_LINK}
                target='_blank'
                aria-label='LinkedIn'
                iconType='linkedIn'>
                <FaLinkedin size={35} />
              </SocialIconLink>
              <SocialIconLink
                href={GITHUB_LINK}
                target='_blank'
                aria-label='Github'
                iconType='github'>
                <FaGithub size={35} />
              </SocialIconLink>
              <SocialIconLink
                href={FACEBOOK_LINK}
                target='_blank'
                aria-label='Facebook'
                iconType='facebook'>
                <FaFacebook size={35} />
              </SocialIconLink>
              <SocialIconLink
                href={MAILTO_LINK}
                target='_blank'
                aria-label='Email'
                iconType='email'>
                <FaEnvelope size={35} />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
        <WebsiteRights>
          Zhiwen Li © {new Date().getFullYear()} All rights reserved.
        </WebsiteRights>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
