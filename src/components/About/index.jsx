import {
  AboutContainer,
  AboutWrapper,
  AboutTitle,
  AboutRow,
  Column1,
  AboutDescription,
  AboutWithLink,
  Column2,
  ImgWrap,
  Img,
} from './AboutComponents';
import myself from '../../assets/myself.jpg';
import resume from '../../assets/zhiwenli-resume.pdf';
import {
  ABOUT_SECTION_ID,
  NANJING_GOOGLE_MAP_LINK,
  VANCOUVER_GOOGLE_MAP_LINK,
} from '../../constants';

const About = () => {
  return (
    <>
      <AboutContainer id={ABOUT_SECTION_ID}>
        <AboutTitle>About Me</AboutTitle>
        <AboutWrapper>
          <AboutRow imgStart={+false}>
            <Column1>
              <AboutDescription>
                I am from{' '}
                <AboutWithLink href={NANJING_GOOGLE_MAP_LINK} target='_blank'>
                  Nanjing
                </AboutWithLink>
                .
              </AboutDescription>
              <AboutDescription>
                I now live in{' '}
                <AboutWithLink href={VANCOUVER_GOOGLE_MAP_LINK} target='_blank'>
                  Vancouver
                </AboutWithLink>
                .
              </AboutDescription>
              <AboutDescription>I studied Engineering in UBC.</AboutDescription>
              <AboutDescription>
                I am a full stack web developer .
              </AboutDescription>
              <AboutDescription>
                I have a more detailed resume{' '}
                <AboutWithLink href={resume} target='_blank'>
                  here
                </AboutWithLink>
                .
              </AboutDescription>
              <AboutDescription>
                I love music games (Cytus, Deemo, Dynamix, ...).
              </AboutDescription>
              <AboutDescription>I love coding.</AboutDescription>
              <AboutDescription>I love DC Comics.</AboutDescription>
              <AboutDescription>
                I watch Youtube and Bilibili videos .
              </AboutDescription>
              <AboutDescription>I use Quora and Zhihu a lot.</AboutDescription>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={myself} alt={'Zhiwen Li'} />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
