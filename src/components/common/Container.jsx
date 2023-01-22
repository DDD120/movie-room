import styled from "@emotion/styled";

const Base = styled.div`
  padding: 0 10px;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  min-height: calc(100% - 33px);
`;

const Container = ({ children }) => {
  return <Base>{children}</Base>;
};

export default Container;
