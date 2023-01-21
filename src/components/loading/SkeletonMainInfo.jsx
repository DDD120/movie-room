import styled from "@emotion/styled";
import { colors } from "styles/common";
import LoadingAnimation from "components/loading/LoadingAnimation";

const Background = styled.div`
  background-blend-mode: darken;
  background-color: rgba(0, 0, 0, 0.7);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const MainInfoContiner = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 28px;
  padding: 40px 0;
`;

const Img = styled.img`
  flex: 2;
  max-width: 360px;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1.416;
  border-radius: 12px;
  background-color: ${colors.lightgray};
`;
const InfoContainer = styled.div`
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
      <MainInfoContiner>
        <Img />
        <InfoContainer>
          <LoadingAnimation />
        </InfoContainer>
      </MainInfoContiner>
    </Background>
  );
};

export default SkeletonMainInfo;
