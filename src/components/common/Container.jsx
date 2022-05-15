import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  min-height: calc(100vh - 93px);
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
