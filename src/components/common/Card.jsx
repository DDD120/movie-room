import styled from "@emotion/styled";
import { Common } from "styles/common";

const CardContainer = styled.div`
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 12px;
  &:hover {
    transition: 0.3s;
    transform: translateY(-4px);
  }
`;

const Title = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Year = styled.div`
  font-size: 0.875rem;
  color: ${Common.colors.grey};
`;

const Card = ({ poster_path, title, release_date }) => {
  const releaseYear = release_date.slice(0, 4);
  return (
    <CardContainer>
      <Img src={poster_path} alt="" />
      <Title>{title}</Title>
      <Year>{releaseYear}</Year>
    </CardContainer>
  );
};

export default Card;
