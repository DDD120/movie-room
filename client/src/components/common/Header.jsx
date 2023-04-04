import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { breakpoint, colors } from "styles/common";
import { Link, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import SearchModal from "../modal/SearchModal";
import { useSelector } from "react-redux";
import MyMenuCard from "./MyMenuCard";
import { AnimatePresence } from "framer-motion";
import LogoImg from "assets/logo.png";

const Base = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background-color: ${colors.beige};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  z-index: 9;

  @media only screen and (max-width: ${breakpoint.md}) {
    padding: 20px 30px;
  }
`;

const Title = styled.div`
  cursor: pointer;
  width: 140px;

  img {
    width: 100%;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 8px;
`;

const NavItem = styled.div`
  width: 36px;
  height: 36px;
  color: ${colors.black};
  background-color: ${({ color }) => color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Header = () => {
  const [isShowSearchModal, setIsShowSearchModal] = useState(false);
  const [isShowMyMenu, setIsShowMyMenu] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handlePersonClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    setIsShowMyMenu(true);
  };

  const handleMyMenuClose = useCallback(() => {
    setIsShowMyMenu(false);
  }, []);

  return (
    <Base>
      <Link to="/">
        <Title>
          <img src={LogoImg} alt="MOVIE ROOM 로고" />
        </Title>
      </Link>
      <Nav>
        <NavItem
          color={colors.orange}
          onClick={() => setIsShowSearchModal(true)}
          title="검색"
        >
          <FiSearch />
        </NavItem>
        <NavItem
          color={colors.cyan}
          onClick={handlePersonClick}
          title={isLoggedIn ? "마이 페이지" : "로그인"}
        >
          <BsFillPersonFill />
        </NavItem>
        <AnimatePresence>
          {isShowSearchModal && (
            <SearchModal onClose={() => setIsShowSearchModal(false)} />
          )}
          {isShowMyMenu && (
            <MyMenuCard
              setIsShowMyMenu={setIsShowMyMenu}
              onClose={handleMyMenuClose}
            />
          )}
        </AnimatePresence>
      </Nav>
    </Base>
  );
};

export default Header;
