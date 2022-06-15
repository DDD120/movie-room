import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { Common } from "styles/common";
import { Link } from "react-router-dom";

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

const Logo = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  color: ${Common.colors.black};
  cursor: pointer;
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
  return (
    <Head>
      <Link to="/">
        <Logo>MOVIE ROOM</Logo>
      </Link>
      <Nav>
        <NavItem color={Common.colors.orange}>
          <FiSearch />
        </NavItem>
        <Link to="/login">
          <NavItem color={Common.colors.cyan}>
            <BsFillPersonFill />
          </NavItem>
        </Link>
      </Nav>
    </Head>
  );
};

export default Header;
