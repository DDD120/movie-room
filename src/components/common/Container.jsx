import styled from "@emotion/styled";

const ContainerBox = styled.div`
  padding: 0 10px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100% - 33px);
`;

const Container = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>;
};

export default Container;
