import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { colors } from "styles/common";
import { Link, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import SearchModal from "../modal/SearchModal";
import { useSelector } from "react-redux";
import MyMenuCard from "./MyMenuCard";

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

  @media only screen and (max-width: 767px) {
    padding: 20px 30px;
  }
`;

const Logo = styled.div`
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
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowMyMenu, setIsShowMyMenu] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setIsShowModal(true);
    document.body.classList.add("scroll_hidden");
  };

  const handleSearchClose = () => {
    setIsShowModal(false);
    document.body.classList.remove("scroll_hidden");
  };

  const handlePersonClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    setIsShowMyMenu((state) => !state);
  };

  const handleMyMenuClose = useCallback(() => {
    setIsShowMyMenu(false);
  }, []);

  return (
    <Base>
      <Link to="/">
        <Logo>
          <img src="/assets/logo.png" alt="로고" />
        </Logo>
      </Link>
      <Nav>
        <NavItem color={colors.orange} onClick={handleSearchClick}>
          <FiSearch />
        </NavItem>
        {isShowModal && <SearchModal onClose={handleSearchClose} />}
        <NavItem color={colors.cyan} onClick={handlePersonClick}>
          <BsFillPersonFill />
        </NavItem>
        {isShowMyMenu && (
          <MyMenuCard
            setIsShowMyMenu={setIsShowMyMenu}
            onMyMenuClose={handleMyMenuClose}
          />
        )}
      </Nav>
    </Base>
  );
};

export default Header;
