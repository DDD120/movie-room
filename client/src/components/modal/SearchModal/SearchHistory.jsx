import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { colors, fontSize } from "styles/common";
import { MdOutlineClose } from "react-icons/md";

const Base = styled.div`
  margin: 20px 0;
`;

const Head = styled.h2`
  color: ${colors.black};
`;

const HistoryList = styled.ul`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const HistoryItem = styled.li`
  display: flex;
  justify-content: center;
  gap: 12px;
  font-size: ${fontSize.base};

  button {
    cursor: pointer;
    color: ${colors.greyOpacity};
  }
`;

const CloseIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSize.md};
`;

const SearchHistory = ({ onClose }) => {
  const historyStorage = new Set(
    JSON.parse(localStorage.getItem("search-history"))
  );
  const [history, setHistory] = useState(historyStorage);

  const deleteHistoryItem = (keyword) => {
    historyStorage.delete(keyword);
    setHistory(historyStorage);
    localStorage.setItem("search-history", JSON.stringify([...historyStorage]));
  };

  return (
    <Base>
      <Head>최근 검색어</Head>
      <HistoryList>
        {[...history]?.map((keyword) => (
          <HistoryItem key={keyword}>
            <Link to={`/search?query=${keyword}`} onClick={onClose}>
              {keyword}
            </Link>
            <CloseIcon onClick={() => deleteHistoryItem(keyword)}>
              <MdOutlineClose />
            </CloseIcon>
          </HistoryItem>
        ))}
      </HistoryList>
    </Base>
  );
};

export default SearchHistory;
