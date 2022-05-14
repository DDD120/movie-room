import styled from "@emotion/styled";
import { Common } from "styles/common";

const Name = styled.span`
  padding: 4px 14px 6px;
  font-size: 1.125rem;
  background-color: #1a3642;
  color: ${Common.colors.white};
  border-radius: 50px;
`;

const Title = ({ name }) => {
  return <Name>{name}</Name>;
};

export default Title;
