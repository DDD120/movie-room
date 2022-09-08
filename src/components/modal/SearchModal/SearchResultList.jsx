import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Common } from "styles/common";
import SearchResultItem from "./SearchResultItem";

const Base = styled.div`
  width: 80%;
  margin: 10px auto;
  padding-right: 8px;
  flex: 5;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: ${Common.colors.orange};
    border-radius: 10px;
  }
`;

const SearchResultList = ({ isLoading, closeHandler, searchModalList }) => {
  return (
    <Base>
      {!isLoading &&
        searchModalList.results?.map((movie, index) => (
          <Link to={`/detail/${movie.id}`} onClick={closeHandler} key={index}>
            <SearchResultItem movie={movie} />
          </Link>
        ))}
    </Base>
  );
};

export default SearchResultList;
