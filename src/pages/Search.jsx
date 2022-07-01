import styled from "@emotion/styled";
import Container from "components/common/Container";
import MovieCard from "components/common/MovieCard";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSearchListData, increaseCurrentPage } from "store/searchResults";
import { FiSearch } from "react-icons/fi";
import LoadingAnimation from "components/loading/LoadingAnimation";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import ToTop from "components/common/ToTop";

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

const Observer = styled.div`
  display: flex;
  justify-content: center;
`;

const Search = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { searchList, totalResults, totalPage, loading, currentPage } =
    useSelector((state) => state.searchResults);
  const searchKeyword = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    dispatch(fetchSearchListData({ searchKeyword, currentPage }));
  }, [dispatch, searchKeyword, currentPage]);

  const onIntersect = useCallback(
    (entry, observer) => {
      if (entry[0].isIntersecting) {
        if (totalPage >= currentPage) {
          dispatch(increaseCurrentPage());
        }
        observer.unobserve(entry[0].target);
      }
    },
    [dispatch, totalPage, currentPage]
  );

  const { setTarget } = useIntersectionObserver({ onIntersect });

  return (
    <Container>
      <Head>
        <IconWrapper>
          <FiSearch />
        </IconWrapper>
        <h1>'{searchKeyword}' 검색 결과</h1>
      </Head>
      <TotalCount>총 {totalResults}편의 영화가 검색되었습니다.</TotalCount>
      <SearchList>
        {searchList?.map((movie) => (
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
      <Observer ref={setTarget}>{loading && <LoadingAnimation />}</Observer>
      <ToTop />
    </Container>
  );
};

export default Search;
