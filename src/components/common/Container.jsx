import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
