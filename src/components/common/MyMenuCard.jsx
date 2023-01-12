import styled from "@emotion/styled";
import { useLogoutMutation } from "apis/server-api";
import ProfileEditModal from "components/modal/ProfileEditModal";
import useOutsideClick from "hooks/useOutsideClick";
import { useCallback } from "react";
import { useRef, useState } from "react";
import { MdSettings } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "store/user";
import { Common } from "styles/common";

const Base = styled.div`
  width: 300px;
  right: 60px;
  padding: 20px;
  border-radius: 12px;
  position: absolute;
  top: 60px;
  background-color: ${Common.colors.beige};
  box-shadow: 0px 0px 10px ${Common.colors.greyOpacity};
`;

const Profile = styled.div`
  display: flex;
  gap: 8px;
  border-bottom: 1px solid ${Common.colors.greyOpacity};
  padding-bottom: 8px;
`;

const Thumbnail = styled.div`
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${Common.colors.grey};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  white-space: pre-line;
  word-break: break-all;
`;

const Nickname = styled.p`
  font-weight: 700;
`;

const ProfileEdit = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 0.9rem;
  cursor: pointer;
`;

const MenuList = styled.ul``;

const MenuItem = styled.li`
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  background-color: ${Common.colors.beige};

  &:hover {
    filter: brightness(0.9);
  }

  button {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

const MyMenuCard = ({ onMyMenuClose, setShowMyMenu }) => {
  const [isShowProfileEditModal, setIsShowProfileEditModal] = useState(false);
  const { id, nickname, thumbnail } = useSelector((state) => state.user.user);
  const [logoutTrigger] = useLogoutMutation();
  const dispatch = useDispatch();
  const cardRef = useRef(null);

  const handleProfileEditBtnClick = () => {
    setIsShowProfileEditModal(true);
  };

  const handleLogoutBtnClick = () => {
    logoutTrigger();
    dispatch(logout());
    onMyMenuClose();
  };

  const closeHandler = useCallback(() => {
    onMyMenuClose();
    setIsShowProfileEditModal(false);
  }, [onMyMenuClose]);

  useOutsideClick(cardRef, setShowMyMenu, isShowProfileEditModal);

  return (
    <Base ref={cardRef}>
      <Profile>
        <Thumbnail>
          <img src={thumbnail} alt="프로필 사진" />
        </Thumbnail>
        <Info>
          <Nickname>{nickname}</Nickname>
          <ProfileEdit onClick={handleProfileEditBtnClick}>
            <MdSettings />
            회원정보 수정
          </ProfileEdit>
          {isShowProfileEditModal && (
            <ProfileEditModal closeHandler={closeHandler} />
          )}
        </Info>
      </Profile>
      <MenuList>
        <Link to={`/my/${id}`} onClick={onMyMenuClose}>
          <MenuItem>My</MenuItem>
        </Link>
        <MenuItem>
          <button onClick={handleLogoutBtnClick}>로그아웃</button>
        </MenuItem>
      </MenuList>
    </Base>
  );
};

export default MyMenuCard;
