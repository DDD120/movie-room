import styled from "@emotion/styled";
import Modal from "../Modal";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyGetSearchQuery } from "apis/movie-db-api";
import SearchInput from "./SearchInput";
import SearchResultList from "./SearchResultList";
import { breakpoint } from "styles/common";
import { isNull } from "lib/filter";
import SearchHistory from "./SearchHistory";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;

  @media only screen and (max-width: ${breakpoint.md}) {
    height: 100%;
  }
`;

const SearchModal = ({ onClose }) => {
  const [isAutoSearch, setIsAutoSearch] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [autoSearchKeyword, setAutoSearchKeyword] = useState("");
  const [focusIndex, setFocusIndex] = useState(-1);
  const focusRef = useRef(null);
  const navigate = useNavigate();

  const [trigger, { data: autoSearchList = [], isLoading }] =
    useLazyGetSearchQuery(searchKeyword);

  const handleInputChange = (e) => {
    const enteredValue =
      e.nativeEvent.inputType === "deleteContentBackward"
        ? ""
        : e.nativeEvent.data;
    if (isAutoSearch) {
      focusIndex >= 0 && setSearchKeyword(autoSearchKeyword + enteredValue);
      setIsAutoSearch(false);
      setFocusIndex(-1);
      return;
    }

    setSearchKeyword(e.target.value);
  };

  const setSearchHistory = (keyword) => {
    const serachHistory =
      new Set(JSON.parse(localStorage.getItem("search-history"))) ??
      new Set([]);
    if (serachHistory.size === 5) {
      const first = [...serachHistory][0];
      serachHistory.delete(first);
    }
    serachHistory.add(keyword);
    localStorage.setItem("search-history", JSON.stringify([...serachHistory]));
  };

  const goToSearch = () => {
    const keyword = isAutoSearch ? autoSearchKeyword : searchKeyword;
    if (isNull(keyword)) {
      return;
    }
    setSearchHistory(keyword);
    navigate(`/search?query=${keyword}`);
    onClose();
  };

  const KeyEvent = {
    Enter: () => {
      goToSearch();
    },
    ArrowDown: () => {
      if (autoSearchList.results.length === 0) {
        return;
      }
      if (focusRef.current.childElementCount === focusIndex + 1) {
        setFocusIndex(() => 0);
        return;
      }
      if (focusIndex === -1) {
        setIsAutoSearch(true);
      }
      setFocusIndex((index) => index + 1);
      setAutoSearchKeyword(autoSearchList.results[focusIndex + 1].title);
    },
    ArrowUp: () => {
      if (focusIndex === -1) {
        return;
      }
      if (focusIndex === 0) {
        setAutoSearchKeyword("");
        setFocusIndex((index) => index - 1);
        setIsAutoSearch(false);
        return;
      }

      setFocusIndex((index) => index - 1);
      setAutoSearchKeyword(autoSearchList.results[focusIndex - 1].title);
    },
    Escape: () => {
      setAutoSearchKeyword("");
      setFocusIndex(-1);
      setIsAutoSearch(false);
    },
  };

  const handleKeyUp = (e) => {
    KeyEvent[e.key] && KeyEvent[e.key]();
  };

  useEffect(() => {
    if (isAutoSearch) {
      return;
    }
    trigger({ query: searchKeyword });
  }, [trigger, searchKeyword, isAutoSearch]);

  return (
    <Modal onClose={onClose} backdropTouchClose={true}>
      <Base>
        <SearchInput
          handleSearchClick={goToSearch}
          onInputChage={handleInputChange}
          onKeyUp={handleKeyUp}
          searchKeyword={searchKeyword}
          isAutoSearch={isAutoSearch}
          autoSearchKeyword={autoSearchKeyword}
        />
        {isNull(searchKeyword) ? (
          <SearchHistory onClose={onClose} />
        ) : (
          <SearchResultList
            isLoading={isLoading}
            onClose={onClose}
            searchKeyword={searchKeyword}
            autoSearchList={autoSearchList}
            focusRef={focusRef}
            focusIndex={focusIndex}
          />
        )}
      </Base>
    </Modal>
  );
};

export default SearchModal;
