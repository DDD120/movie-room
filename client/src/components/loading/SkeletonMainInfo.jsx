import styled from "@emotion/styled";
import { breakpoint, colors } from "styles/common";
import LoadingAnimation from "components/loading/LoadingAnimation";

const Background = styled.div`
  background-blend-mode: darken;
  background-color: rgba(0, 0, 0, 0.7);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const MainInfo = styled.section`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 28px;
  padding: 40px 0;
  @media only screen and (max-width: ${breakpoint.md}) {
    display: block;
  }
`;

const Img = styled.img`
  flex: 2;
  max-width: 360px;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1.416;
  border-radius: 12px;
  background-color: ${colors.lightgray};
  @media only screen and (max-width: ${breakpoint.md}) {
    margin-bottom: 28px;
  }
`;
const Info = styled.div`
  flex: 3;
  position: relative;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkeletonMainInfo = () => {
  return (
    <Background>
      <MainInfo>
        <Img />
        <Info>
          <LoadingAnimation />
        </Info>
      </MainInfo>
    </Background>
  );
};

export default SkeletonMainInfo;
