import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { Common } from "styles/common";

const SearchContainer = styled.div`
  flex: 1;
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 2px solid ${Common.colors.black};
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px 10px;
  border: none;
  background-color: ${Common.colors.beige};
  outline: none;
  font-size: 1.5rem;
`;

const SearchIcon = styled.button`
  font-size: 2rem;
  cursor: pointer;
  color: ${Common.colors.black};
`;

const SearchInput = ({
  onKeyUp,
  goToSearch,
  onInputChage,
  searchKeyword,
  isAutoSearch,
  autoSearchKeyword,
}) => {
  return (
    <SearchContainer>
      <SearchIcon onClick={goToSearch}>
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
      />
    </SearchContainer>
  );
};

export default SearchInput;
