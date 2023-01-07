import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { Common } from "styles/common";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchModal from "../modal/SearchModal";
import { useSelector } from "react-redux";
import MyMenuCard from "./MyMenuCard";

const Head = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background-color: ${Common.colors.beige};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  z-index: 9;
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
  color: ${Common.colors.black};
  background-color: ${({ color }) => color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Header = () => {
  const [showMyMenu, setShowMyMenu] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.user);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  console.log(isLoggedIn);

  const openHandler = () => {
    setIsOpenModal(true);
    document.body.classList.add("scroll_hidden");
  };

  const closeHandler = () => {
    setIsOpenModal(false);
    document.body.classList.remove("scroll_hidden");
  };

  const handlePersonIconBtnCLick = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    setShowMyMenu((state) => !state);
  };

  const closeMyMenuCard = () => {
    setShowMyMenu(false);
  };

  return (
    <Head>
      <Link to="/">
        <Logo>
          <img src="/assets/logo.png" alt="로고" />
        </Logo>
      </Link>
      <Nav>
        <NavItem color={Common.colors.orange} onClick={openHandler}>
          <FiSearch />
        </NavItem>
        {isOpenModal && <SearchModal closeHandler={closeHandler} />}
        <NavItem color={Common.colors.cyan} onClick={handlePersonIconBtnCLick}>
          <BsFillPersonFill />
        </NavItem>
        {showMyMenu && <MyMenuCard onMyMenuClose={closeMyMenuCard} />}
      </Nav>
    </Head>
  );
};

export default Header;
