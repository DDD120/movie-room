import styled from "@emotion/styled";
import NoImg from "components/common/NoImg";
import { colors } from "styles/common";

const Base = styled.div`
  width: 100%;
`;

const ImgBox = styled.div`
  position: relative;
  aspect-ratio: 1 / 1.416;
  width: 100%;
  overflow: hidden;
  margin-bottom: 6px;
  border-radius: 12px;
  background-color: ${colors.lightgray};
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

const Name = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Character = styled.div`
  font-size: 0.875rem;
  color: ${colors.grey};
`;

const PersonCard = ({ name, profile_path, character }) => {
  return (
    <Base>
      <ImgBox>
        {profile_path ? (
          <Img
            src={`${process.env.REACT_APP_THE_MOVIE_DB_IMG_BASE_URL}${profile_path}`}
            alt={`${name}`}
          />
        ) : (
          <NoImg />
        )}
      </ImgBox>
      <Name>{name}</Name>
      {character && <Character>{character} 역</Character>}
    </Base>
  );
};

export default PersonCard;
