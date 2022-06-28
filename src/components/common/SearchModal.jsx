import styled from "@emotion/styled";
import { Common, NoImg } from "styles/common";
import Modal from "./Modal";
import { FiSearch } from "react-icons/fi";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchModalListData } from "store/searchResults";
import { debounce } from "lodash";
import { MdOutlineClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Base = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SearchContainer = styled.div`
  flex: 1;
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 2px solid ${Common.colors.black};
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px 10px;
  border: none;
  background-color: ${Common.colors.beige};
  outline: none;
  font-size: 1.5rem;
`;

const IconWrapper = styled.button`
  font-size: 2rem;
  cursor: pointer;
  color: ${Common.colors.black};
`;

const SearchResultList = styled.div`
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

const SearchResultItem = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: 0.2s;
  border-radius: 12px;
  &:hover {
    background-color: ${Common.colors.orangeOpacity};
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  aspect-ratio: 1 / 1.416;
  width: 100%;
  max-width: 80px;
  overflow: hidden;
  border-radius: 12px;
`;

const Poster = styled.img`
  width: 100%;
`;

const Title = styled.p`
  text-align: left;
`;

const SearchModal = ({ closeHandler }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchModalList, loading } = useSelector(
    (state) => state.searchResults
  );

  const isNull = useCallback(() => {
    const blank_pattern = /^\s+|\s+$/g;
    return searchKeyword.replace(blank_pattern, "") === "";
  }, [searchKeyword]);

  const isEnter = (e) => {
    if (e.keyCode === 13) goToSearch();
  };

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
    dispatch(fetchSearchModalListData(searchKeyword));
  }, [dispatch, searchKeyword, isNull]);

  return (
    <Modal closeHandler={closeHandler}>
      <Base>
        <SearchContainer>
          <IconWrapper onClick={goToSearch}>
            <FiSearch />
          </IconWrapper>
          <Input
            type="text"
            placeholder="영화를 검색해보세요"
            onChange={debounce(InputChangeHandler, 200)}
            onKeyDown={isEnter}
          />
          <IconWrapper onClick={closeHandler}>
            <MdOutlineClose />
          </IconWrapper>
        </SearchContainer>
        <SearchResultList>
          {!loading &&
            searchModalList?.map((movie, index) => (
              <Link
                to={`/detail/${movie.id}`}
                onClick={closeHandler}
                key={index}
              >
                <SearchResultItem>
                  <ImgWrapper>
                    {movie.poster_path ? (
                      <Poster
                        src={`${process.env.REACT_APP_THE_MOVIE_DB_IMG_BASE_URL}${movie.poster_path}`}
                        alt={`${movie.title} 포스터`}
                      />
                    ) : (
                      <NoImg>NO IMAGE</NoImg>
                    )}
                  </ImgWrapper>
                  <Title>{movie.title}</Title>
                </SearchResultItem>
              </Link>
            ))}
        </SearchResultList>
      </Base>
    </Modal>
  );
};

export default SearchModal;
