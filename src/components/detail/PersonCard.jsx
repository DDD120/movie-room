import styled from "@emotion/styled";
import { Common } from "styles/common";

const CardContainer = styled.div``;

const ImgWrapper = styled.div`
  position: relative;
  aspect-ratio: 1 / 1.416;
  width: 100%;
  overflow: hidden;
  margin-bottom: 6px;
  border-radius: 12px;
  background-color: ${Common.colors.grey};
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1.416;
  border-radius: 12px;
  object-fit: cover;
`;

const NoImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1.416;
  border-radius: 12px;
  object-fit: cover;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Common.colors.black};
  font-size: 0.875rem;
`;

const Name = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Character = styled.div`
  font-size: 0.875rem;
  color: ${Common.colors.grey};
`;

const PersonCard = ({ name, profile_path, character }) => {
  return (
    <CardContainer>
      <ImgWrapper>
        {profile_path ? (
          <Img
            src={`${process.env.REACT_APP_THE_MOVIE_DB_IMG_BASE_URL}${profile_path}`}
            alt={`${name}`}
          />
        ) : (
          <NoImg>NO IMAGE</NoImg>
        )}
      </ImgWrapper>
      <Name>{name}</Name>
      <Character>{character} 역</Character>
    </CardContainer>
  );
};

export default PersonCard;
