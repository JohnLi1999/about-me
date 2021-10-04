import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding: 50px 0;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    min-height: 1200px;
  }

  @media screen and (max-width: 480px) {
    min-height: 1000px;
  }
`;

export const AboutTitle = styled.div`
  margin-bottom: -20px;
  font-size: 60px;
  text-align: center;
  color: #e48a89;

  @media screen and (max-width: 1000px) {
    margin-bottom: -50px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
    font-size: 48px;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 700px;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 50px;
  padding: 0 15px;
  grid-area: col1;
`;

export const AboutDescription = styled.div`
  color: #000;
  text-align: start;
  margin: 22px;
  font-size: 18px;

  @media screen and (max-width: 900px) {
    font-size: 18px;
    margin: 18px;
  }

  @media screen and (max-width: 800px) {
    font-size: 16px;
    margin: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    margin: 10px;
  }
`;

export const AboutWithLink = styled.a`
  text-decoration: none;
  color: #e48a89;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 30px;
  grid-area: col2;
`;

export const ImgWrap = styled.div`
  max-width: 400px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 10px;
  border: solid 2px #e48a89;
`;
