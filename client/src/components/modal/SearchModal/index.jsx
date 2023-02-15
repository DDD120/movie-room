import styled from "@emotion/styled";
import Modal from "../Modal";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyGetSearchQuery } from "apis/movie-db-api";
import SearchInput from "./SearchInput";
import SearchResultList from "./SearchResultList";
import { breakpoint } from "styles/common";

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

  const isNull = useCallback(() => {
    const blank_pattern = /^\s+|\s+$/g;
    return searchKeyword.replace(blank_pattern, "") === "";
  }, [searchKeyword]);

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

  const goToSearch = () => {
    if (isNull()) {
      return;
    }
    navigate(
      `/search?query=${isAutoSearch ? autoSearchKeyword : searchKeyword}`
    );
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
    for (const key in KeyEvent) {
      key === e.key && KeyEvent[e.key]();
    }
  };

  useEffect(() => {
    if (isAutoSearch || isNull()) {
      return;
    }
    trigger({ query: searchKeyword });
  }, [trigger, searchKeyword, isAutoSearch, isNull]);

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
        <SearchResultList
          isLoading={isLoading}
          onClose={onClose}
          autoSearchList={autoSearchList}
          focusRef={focusRef}
          focusIndex={focusIndex}
        />
      </Base>
    </Modal>
  );
};

export default SearchModal;
