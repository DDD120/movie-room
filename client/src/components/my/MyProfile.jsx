import styled from "@emotion/styled";
import { shallowEqual, useSelector } from "react-redux";
import { fontSize } from "styles/common";

const Base = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: 50px 0;
`;

const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: gray;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    image-rendering: auto;
  }
`;

const Nickname = styled.p`
  font-weight: 700;
  font-size: ${fontSize.lg};
  margin: 10px 0;
`;

const MyProfile = () => {
  const { thumbnail, nickname } = useSelector(
    (state) => state.user.user,
    shallowEqual
  );

  return (
    <Base>
      <Thumbnail>
        <img src={thumbnail} alt="프로필 사진" />
      </Thumbnail>
      <Nickname>{nickname}</Nickname>
    </Base>
  );
};

export default MyProfile;
