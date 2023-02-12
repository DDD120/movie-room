import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";
import { colors } from "styles/colors";

const Base = styled.div`
  flex: 1;
  margin: 0 auto;
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
  font-size: 1.5rem;
`;

const SearchIcon = styled.button`
  font-size: 2rem;
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
      />
    </Base>
  );
};

export default SearchInput;
