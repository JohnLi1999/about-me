import styled from 'styled-components';

export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HomeBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeTitle = styled.h1`
  color: #fff;
  font-size: 60px;
  margin-bottom: 80px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and (max-width: 560px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 38px;
  }

  @media screen and (max-width: 455px) {
    font-size: 32px;
  }

  @media screen and (max-width: 400px) {
    font-size: 38px;
  }
`;

export const HomeDescription = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 48px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 42px;
  }

  @media screen and (max-width: 560px) {
    font-size: 38px;
  }

  @media screen and (max-width: 480px) {
    font-size: 34px;
  }

  @media screen and (max-width: 455px) {
    font-size: 28px;
  }

  @media screen and (max-width: 400px) {
    font-size: 30px;
  }
`;

export const HomeHighlight = styled.span`
  font-weight: 700;
  color: #e48a89;
`;
