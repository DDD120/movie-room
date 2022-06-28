import styled from "@emotion/styled";
import Container from "components/common/Container";
import MovieCard from "components/common/MovieCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSearchListData } from "store/searchResults";
import { FiSearch } from "react-icons/fi";

const Head = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const TotalCount = styled.p`
  padding: 10px;
`;

const IconWrapper = styled.span`
  font-size: 2rem;
  margin: 8px 8px 0 0;
`;

const SearchList = styled.div`
  margin: 20px 0 120px;
  display: flex;
  flex-wrap: wrap;
`;

const SearchItem = styled.div`
  width: 20%;
  padding: 4px;
  flex: 0 0 20%;
`;

const Search = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { searchList } = useSelector((state) => state.searchResults);
  const searchKeyword = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    dispatch(fetchSearchListData(searchKeyword));
  }, [dispatch, searchKeyword]);

  return (
    <Container>
      <Head>
        <IconWrapper>
          <FiSearch />
        </IconWrapper>
        <h1>'{searchKeyword}' 검색 결과</h1>
      </Head>
      <TotalCount>
        총 {searchList.total_results}편의 영화가 검색되었습니다.
      </TotalCount>
      <SearchList>
        {searchList.results?.map((movie) => (
          <SearchItem key={movie.id}>
            <MovieCard
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
            />
          </SearchItem>
        ))}
      </SearchList>
    </Container>
  );
};

export default Search;
