import styled from "@emotion/styled";
import dayjs from "dayjs";
import { colors } from "styles/colors";

const Base = styled.footer`
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
  background-color: ${({ color }) => color};
`;

const Footer = () => {
  const year = dayjs().year();

  return (
    <Base>
      <Copyright>
        <Title>MOVIE ROOM</Title>
        <span>© {year}. DDD120. ALL RIGHTS RESERVED</span>
      </Copyright>
      <Box color={colors.cyan} />
      <Box color={colors.orange} />
      <Box color={colors.red} />
    </Base>
  );
};

export default Footer;
