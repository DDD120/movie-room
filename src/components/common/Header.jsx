import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { Common } from "styles/common";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchModal from "../modal/SearchModal";
import { useSelector } from "react-redux";

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

  & > img {
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
  const { verified, id } = useSelector((state) => state.user.user);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openHandler = () => {
    setIsOpenModal(true);
    document.body.classList.add("scroll_hidden");
  };

  const closeHandler = () => {
    setIsOpenModal(false);
    document.body.classList.remove("scroll_hidden");
  };

  return (
    <Head>
      <Link to="/">
        <Logo>
          <img src="/images/logo.png" alt="로고" />
        </Logo>
      </Link>
      <Nav>
        <NavItem color={Common.colors.orange} onClick={openHandler}>
          <FiSearch />
        </NavItem>
        {isOpenModal && <SearchModal closeHandler={closeHandler} />}
        <Link to={verified ? `/my/${id}` : "/login"}>
          <NavItem color={Common.colors.cyan}>
            <BsFillPersonFill />
          </NavItem>
        </Link>
      </Nav>
    </Head>
  );
};

export default Header;
