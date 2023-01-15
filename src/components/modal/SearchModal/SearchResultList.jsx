import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
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

const SearchResultList = ({
  focusRef,
  isLoading,
  onClose,
  autoSearchList,
  focusIndex,
}) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [focusIndex]);

  return (
    <Base ref={focusRef}>
      {!isLoading &&
        autoSearchList.results?.map((movie, listIndex) => (
          <Link to={`/detail/${movie.id}`} onClick={onClose} key={movie.id}>
            <SearchResultItem
              movie={movie}
              isFocus={listIndex === focusIndex}
              scrollRef={scrollRef}
            />
          </Link>
        ))}
    </Base>
  );
};

export default SearchResultList;
