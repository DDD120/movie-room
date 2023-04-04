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
import { breakpoint, colors, fontSize } from "styles/common";
import { motion, AnimatePresence } from "framer-motion";
import DefaultThumnailImg from "assets/default-thumbnail.png";

const Base = styled(motion.div)`
  width: 300px;
  right: 60px;
  padding: 20px;
  border-radius: 12px;
  position: absolute;
  top: 60px;
  background-color: ${colors.beige};
  box-shadow: 0px 0px 10px ${colors.greyOpacity};

  @media only screen and (max-width: ${breakpoint.md}) {
    width: 240px;
    right: 30px;
  }
`;

const Profile = styled.div`
  display: flex;
  gap: 8px;
  border-bottom: 1px solid ${colors.greyOpacity};
  padding-bottom: 8px;
`;

const Thumbnail = styled.div`
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${colors.grey};
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
  font-size: ${fontSize.sm};
  cursor: pointer;
`;

const MenuList = styled.ul``;

const MenuItem = styled.li`
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  background-color: ${colors.beige};

  &:hover {
    filter: brightness(0.9);
  }

  button {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

const MyMenuCard = ({ onClose, setIsShowMyMenu }) => {
  const [isShowProfileEditModal, setIsShowProfileEditModal] = useState(false);
  const { id, nickname, thumbnail } = useSelector((state) => state.user.user);
  const [logoutTrigger] = useLogoutMutation();
  const dispatch = useDispatch();
  const cardRef = useRef(null);

  const handleLogoutClick = () => {
    logoutTrigger();
    dispatch(logout());
    onClose();
  };

  const handleModalClose = useCallback(() => {
    onClose();
    setIsShowProfileEditModal(false);
  }, [onClose]);

  useOutsideClick({
    ref: cardRef,
    setState: setIsShowMyMenu,
    exceptionState: isShowProfileEditModal,
  });

  return (
    <Base
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.5, originX: 1, originY: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <Profile>
        <Thumbnail>
          <img
            src={thumbnail === "" ? DefaultThumnailImg : thumbnail}
            alt="프로필 사진"
          />
        </Thumbnail>
        <Info>
          <Nickname>{nickname}</Nickname>
          <ProfileEdit onClick={() => setIsShowProfileEditModal(true)}>
            <MdSettings />
            회원정보 수정
          </ProfileEdit>
          <AnimatePresence>
            {isShowProfileEditModal && (
              <ProfileEditModal onClose={handleModalClose} />
            )}
          </AnimatePresence>
        </Info>
      </Profile>
      <MenuList>
        <Link to={`/my/${id}`} onClick={onClose}>
          <MenuItem>My</MenuItem>
        </Link>
        <MenuItem>
          <button onClick={handleLogoutClick}>로그아웃</button>
        </MenuItem>
      </MenuList>
    </Base>
  );
};

export default MyMenuCard;
