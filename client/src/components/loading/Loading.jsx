import Container from "components/common/Container";
import LoadingAnimation from "components/loading/LoadingAnimation";
import styled from "@emotion/styled";

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loading = () => {
  return (
    <Container>
      <Base>
        <LoadingAnimation />
      </Base>
    </Container>
  );
};

export default Loading;
