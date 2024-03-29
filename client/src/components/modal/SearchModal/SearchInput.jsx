import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { colors, fontSize } from "styles/common";

const Base = styled.div`
  margin: 20px auto 0;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 2px solid ${colors.black};
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px 10px;
  border: none;
  background-color: ${colors.beige};
  outline: none;
  font-size: ${fontSize.md};
`;

const SearchIcon = styled.button`
  font-size: ${fontSize.xl};
  cursor: pointer;
  color: ${colors.black};
`;

const SearchInput = ({
  onKeyUp,
  handleSearchClick,
  onInputChage,
  searchKeyword,
  isAutoSearch,
  autoSearchKeyword,
}) => {
  return (
    <Base>
      <SearchIcon onClick={handleSearchClick}>
        <FiSearch />
      </SearchIcon>
      <Input
        type="text"
        placeholder="영화를 검색해보세요"
        title="검색"
        name="검색"
        value={isAutoSearch ? autoSearchKeyword : searchKeyword}
        onChange={onInputChage}
        onKeyUp={onKeyUp}
        autoFocus
      />
    </Base>
  );
};

export default SearchInput;
