import styled from "@emotion/styled";
import { Common } from "styles/common";
import { AiFillStar } from "react-icons/ai";
import { useGetMainInfoQuery } from "apis/movie-db-api";
import { Link } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useRef, useState } from "react";
import useOutsideClick from "hooks/useOutsideClick";
import dayjs from "dayjs";

const Base = styled.div`
  position: relative;
  flex-shrink: 0;
  max-width: 320px;
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 2px solid ${Common.colors.greyOpacity};
  background-color: ${Common.colors.beige};
`;

const Head = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid ${Common.colors.greyOpacity};
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 900;
`;

const Rating = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 1.2rem;

  svg {
    transform: translateY(2px);
  }
`;

const ReviewContent = styled.div`
  white-space: pre-line;
  word-break: break-all;
  overflow-y: scroll;
  margin: 10px 0;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: ${Common.colors.orange};
    border-radius: 10px;
  }
`;

const Date = styled.p`
  font-size: 0.9rem;
  color: ${Common.colors.grey};
`;

const ReleaseYear = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
`;

const Menu = styled.div`
  position: absolute;
  bottom: 12px;
  right: 8px;
  display: flex;
  justify-content: flex-end;
`;

const MenuBtn = styled.button`
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 1.2rem;
`;

const MenuList = styled.ul`
  width: 80px;
  position: absolute;
  bottom: -60px;
  background-color: ${Common.colors.beige};
  z-index: 1;
  border-radius: 4px;
  border: 2px solid ${Common.colors.greyOpacity};
`;

const MenuListItemBtn = styled.button`
  width: 100%;
  padding: 4px 8px;
  cursor: pointer;
  transition: filter 0.3s;
  background-color: ${Common.colors.beige};

  &:hover {
    filter: brightness(0.9);
  }
`;

const MyReviewItem = ({ review }) => {
  const [isShowMenuList, setIsShowMenuList] = useState(false);
  const { data: movieData, isLoading } = useGetMainInfoQuery(review.movieId);
  const itemRef = useRef();

  const releaseYear = movieData?.release_date.slice(0, 4);

  const handleClickMenuButton = () => {
    setIsShowMenuList((value) => !value);
  };

  useOutsideClick(itemRef, setIsShowMenuList);

  return (
    <Base>
      {!isLoading && (
        <>
          <Head>
            <Link to={`/detail/${review.movieId}`}>
              <Title>
                {movieData.title} <ReleaseYear>({releaseYear})</ReleaseYear>
              </Title>
            </Link>
            <Rating>
              <AiFillStar />
              {review.rating}
            </Rating>
          </Head>
          <ReviewContent>{review.content}</ReviewContent>
          <Date>{dayjs(review.updatedAt).format("YY.MM.DD")}</Date>
          <Menu>
            <MenuBtn onClick={handleClickMenuButton}>
              <BiDotsVerticalRounded />
            </MenuBtn>
            {isShowMenuList && (
              <MenuList ref={itemRef}>
                <li>
                  <MenuListItemBtn>리뷰 수정</MenuListItemBtn>
                </li>
                <li>
                  <MenuListItemBtn>리뷰 삭제</MenuListItemBtn>
                </li>
              </MenuList>
            )}
          </Menu>
        </>
      )}
    </Base>
  );
};

export default MyReviewItem;
