import styled from "@emotion/styled";
import Modal from "../Modal";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyGetSearchQuery } from "apis/movie-db-api";
import SearchInput from "./SearchInput";
import SearchResultList from "./SearchResultList";

const Base = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SearchModal = ({ closeHandler }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const [trigger, { data: searchModalList = [], isLoading }] =
    useLazyGetSearchQuery(searchKeyword);

  const isNull = useCallback(() => {
    const blank_pattern = /^\s+|\s+$/g;
    return searchKeyword.replace(blank_pattern, "") === "";
  }, [searchKeyword]);

  const InputChangeHandler = (evnet) => {
    if (searchKeyword.trim() === evnet.target.value.trim()) return;
    setSearchKeyword(evnet.target.value.trim());
  };

  const goToSearch = () => {
    if (isNull()) return;
    navigate(`/search?query=${searchKeyword}`);
    closeHandler();
  };

  useEffect(() => {
    if (isNull()) return;
    trigger({ query: searchKeyword });
  }, [isNull, trigger, searchKeyword]);

  return (
    <Modal closeHandler={closeHandler} backdropTouchClose={true}>
      <Base>
        <SearchInput
          goToSearch={goToSearch}
          InputChangeHandler={InputChangeHandler}
        />
        <SearchResultList
          isLoading={isLoading}
          closeHandler={closeHandler}
          searchModalList={searchModalList}
        />
      </Base>
    </Modal>
  );
};

export default SearchModal;
