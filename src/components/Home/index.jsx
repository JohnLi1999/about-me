import {
  HomeContainer,
  HomeBackground,
  VideoBackground,
  HomeContent,
  HomeTitle,
  HomeDescription,
  HomeHighlight,
} from './HomeComponents';
import video from '../../assets/video.mp4';
import { HOME_SECTION_ID } from '../../constants';

const Home = () => {
  return (
    <HomeContainer id={HOME_SECTION_ID}>
      <HomeBackground>
        <VideoBackground
          autoPlay
          loop
          muted
          playsInline
          src={video}
          type='video/mp4'
        />
      </HomeBackground>
      <HomeContent>
        <HomeTitle>
          Hello! I'm <HomeHighlight>Zhiwen Li</HomeHighlight>
        </HomeTitle>
        <HomeDescription>
          A <HomeHighlight>Full Stack</HomeHighlight> Developer from{' '}
          <HomeHighlight>UBC</HomeHighlight>
        </HomeDescription>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
