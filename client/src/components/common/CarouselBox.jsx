import styled from "@emotion/styled";

const Base = styled.section`
  margin: 0 0 120px 0;
`;

const CarouselBox = ({ children }) => {
  return <Base>{children}</Base>;
};

export default CarouselBox;
