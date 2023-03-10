import styled from "@emotion/styled";
import { colors, fontSize } from "styles/common";

const Base = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1.416;
  border-radius: 12px;
  object-fit: cover;
  padding: 12px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.black};
  background-color: ${colors.lightgray};
  font-size: ${fontSize.sm};
`;

const NoImg = () => {
  return <Base>NO IMAGE</Base>;
};

export default NoImg;
