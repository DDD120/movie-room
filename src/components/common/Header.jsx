import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { Common } from "styles/common";

const Head = styled.head`
  margin: 18px 60px;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
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
  background-color: ${(props) =>
    props.color ? props.color : Common.colors.cyan};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Head>
      <Logo>MOVIE ROOM</Logo>
      <Nav>
        <NavItem color={Common.colors.orange}>
          <FiSearch />
        </NavItem>
        <NavItem>
          <BsFillPersonFill />
        </NavItem>
      </Nav>
    </Head>
  );
};

export default Header;
