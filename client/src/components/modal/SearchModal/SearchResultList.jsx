import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { colors } from "styles/common";
import SearchResultItem from "./SearchResultItem";
import { motion, useAnimationControls } from "framer-motion";

const Base = styled(motion.ul)`
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
    background-color: ${colors.orange};
    border-radius: 10px;
  }
`;

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const SearchResultList = ({
  focusRef,
  isLoading,
  onClose,
  searchKeyword,
  autoSearchList,
  focusIndex,
}) => {
  const scrollRef = useRef(null);
  const controls = useAnimationControls();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [focusIndex]);

  useEffect(() => {
    controls.start("show");
  }, [autoSearchList.results, controls]);

  return (
    <Base ref={focusRef} variants={list} initial="hidden" animate={controls}>
      {!isLoading &&
        autoSearchList.results?.map((movie, listIndex) => (
          <motion.li key={movie.id} variants={item}>
            <Link to={`/detail/${movie.id}`} onClick={onClose}>
              <SearchResultItem
                movie={movie}
                isFocus={listIndex === focusIndex}
                scrollRef={scrollRef}
                searchKeyword={searchKeyword}
              />
            </Link>
          </motion.li>
        ))}
    </Base>
  );
};

export default SearchResultList;
