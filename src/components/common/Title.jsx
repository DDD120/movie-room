import styled from "@emotion/styled";
import { colors, fontSize } from "styles/common";

const Base = styled.span`
  padding: 4px 14px 6px;
  font-size: ${fontSize.base};
  background-color: #1a3642;
  color: ${colors.white};
  border-radius: 50px;
`;

const Title = ({ children }) => {
  return <Base>{children}</Base>;
};

export default Title;
