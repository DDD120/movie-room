import styled from "@emotion/styled";
import Container from "components/common/Container";
import MovieCard from "components/common/MovieCard";
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import LoadingAnimation from "components/loading/LoadingAnimation";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import ToTop from "components/common/ToTop";
import { useLazyGetSearchQuery } from "apis/movie-db-api";
import { arrayDeduplication } from "lib/filter";
import useScrollRestoration from "hooks/useScrollRestoration";

const Head = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const TotalCount = styled.p`
  padding: 10px;
`;

const SearchIcon = styled.span`
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

const ObserverBox = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
`;

const Observer = styled.div`
  display: flex;
  justify-content: center;
`;

const Search = () => {
  const location = useLocation();
  const searchKeyword = new URLSearchParams(location.search).get("query");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [
    trigger,
    {
      data: searchData = {},

      isFetching,
      isSuccess,
    },
  ] = useLazyGetSearchQuery();

  useEffect(() => {
    if (isSuccess) {
      setSearchResults((list) => {
        const serarchList = arrayDeduplication([
          ...list,
          ...searchData.results,
        ]);
        return serarchList;
      });
    }
  }, [isSuccess, searchData.page, searchData.results]);

  useEffect(() => {
    trigger({ query: searchKeyword, page: currentPage });
  }, [trigger, searchKeyword, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    setSearchResults([]);
  }, [searchKeyword]);

  useScrollRestoration();

  const onIntersect = useCallback(
    (entry, observer) => {
      if (entry[0].isIntersecting) {
        if (
          searchData.total_pages >= currentPage &&
          searchData.page === currentPage
        ) {
          setCurrentPage((page) => page + 1);
        }
        observer.unobserve(entry[0].target);
      }
    },
    [searchData.total_pages, currentPage, searchData.page]
  );

  const { setTarget } = useIntersectionObserver({ onIntersect });

  return (
    <Container>
      <Head>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <h1>'{searchKeyword}' 검색 결과</h1>
      </Head>
      <TotalCount>
        총 {searchData.total_results}편의 영화가 검색되었습니다.
      </TotalCount>

      <SearchList>
        {searchResults.length > 0 &&
          searchResults.map((movie) => (
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
      <ObserverBox>
        {isFetching ? (
          <LoadingAnimation />
        ) : (
          <Observer ref={setTarget}></Observer>
        )}
      </ObserverBox>
      <ToTop />
    </Container>
  );
};

export default Search;
