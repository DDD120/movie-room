import styled from "@emotion/styled";
import { Common } from "styles/common";

const Foot = styled.footer`
  width: 100%;
  z-index: 9;
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 0.75rem;
  line-height: 18px;
`;

const Title = styled.span`
  font-weight: 700;
  margin-right: 4px;
`;

const Box = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${(props) => props.color};
`;

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <Foot>
      <Copyright>
        <Title>MOVIE ROOM</Title>
        <span>© {getYear}. DDD120. ALL RIGHTS RESERVED</span>
      </Copyright>
      <Box color={Common.colors.cyan} />
      <Box color={Common.colors.orange} />
      <Box color={Common.colors.red} />
    </Foot>
  );
};

export default Footer;
