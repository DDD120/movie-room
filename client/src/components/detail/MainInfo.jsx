import styled from "@emotion/styled";
import { breakpoint, colors, fontSize } from "styles/common";
import { BsPen } from "react-icons/bs";
import { useState } from "react";
import CreateReview from "components/modal/ReviewModal/CreateReview";
import { useSelector } from "react-redux";
import Button from "components/common/Button";
import useCheckWrittenReview from "hooks/useCheckWrittenReview";
import { AiOutlineShareAlt } from "react-icons/ai";
import NoImg from "components/common/NoImg";
import { getYear } from "lib/filter";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const Background = styled.div`
  background-blend-mode: darken;
  background-color: rgba(0, 0, 0, 0.7);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: ${({ backdrop_path }) =>
    backdrop_path &&
    `url(${process.env.REACT_APP_THE_MOVIE_DB_IMG_BASE_URL}${backdrop_path})`};
`;

const Base = styled.section`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 28px;
  color: ${colors.white};
  padding: 40px 0;
  @media only screen and (max-width: ${breakpoint.md}) {
    display: block;
  }
`;
const ImgBox = styled.div`
  flex: 2;
  max-width: 360px;
  width: 100%;
  aspect-ratio: 1 / 1.416;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  @media only screen and (max-width: ${breakpoint.md}) {
    margin-bottom: 28px;
  }
`;
const Img = styled(motion.img)`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1.416;
  border-radius: 12px;
`;
const InfoBox = styled.div`
  flex: 3;
  position: relative;
  padding-bottom: 60px;
`;
const Title = styled.h1`
  font-size: ${fontSize.xl};
`;
const Year = styled.span`
  font-size: ${fontSize.md};
  margin: 0 4px;
  color: ${colors.grey};
`;
const Info = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  margin: 20px 0;
`;
const Category = styled.span`
  color: ${colors.lightgray};
`;
const Value = styled.span``;

const Tagline = styled.i`
  font-size: ${fontSize.md};
  font-weight: 700;
`;
const Overview = styled.p`
  margin: 10px 0;
`;

const BottomBox = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SharIcon = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${colors.cyan};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.black};
  font-size: ${fontSize.md};
  transition: filter 0.3s;
  &:hover {
    filter: brightness(0.9);
  }
`;

const PenIcon = styled.span`
  display: inline-block;
  margin-right: 8px;
  transform: translateY(2px);
`;

const MainInfo = ({ movie, reviews }) => {
  const [showWriteReviewModal, setShowWriteReviewModal] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.user);
  const { isWritten } = useCheckWrittenReview(reviews);

  const handleShareClick = () => {
    window.navigator.share({
      title: "MOVIE ROOM",
      text: `${movie.title} 상세정보`,
      url: window.location.href,
    });
  };

  return (
    <>
      <Background backdrop_path={movie.backdrop_path}>
        <Base>
          <ImgBox>
            {movie.poster_path ? (
              <Img
                src={`${process.env.REACT_APP_THE_MOVIE_DB_IMG_BASE_URL}${movie.poster_path}`}
                alt={`${movie.title} 포스터`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                }}
              />
            ) : (
              <NoImg />
            )}
          </ImgBox>
          <InfoBox>
            <Title>
              {movie.title}
              <Year>({getYear(movie?.release_date)})</Year>
            </Title>
            <Info>
              <Category>원제</Category>
              <Value>{movie.original_title}</Value>
              <Category>원어</Category>
              <Value>{movie.original_language?.toUpperCase()}</Value>
              <Category>발매일</Category>
              <Value>{movie.release_date}</Value>
              <Category>장르</Category>
              <Value>
                {movie?.genres.map((genre) => genre.name).join("/")}
              </Value>
              <Category>상영시간</Category>
              <Value>{movie.runtime}분</Value>
            </Info>
            {movie.tagline && <Tagline>"{movie.tagline}"</Tagline>}
            <Overview>{movie.overview}</Overview>
            <BottomBox>
              {isLoggedIn && !isWritten && (
                <Button onClick={() => setShowWriteReviewModal(true)}>
                  <PenIcon>
                    <BsPen />
                  </PenIcon>
                  리뷰 작성
                </Button>
              )}
              <SharIcon onClick={handleShareClick}>
                <AiOutlineShareAlt />
              </SharIcon>
            </BottomBox>
            <AnimatePresence>
              {showWriteReviewModal && (
                <CreateReview
                  movie={movie}
                  onClose={() => setShowWriteReviewModal(false)}
                />
              )}
            </AnimatePresence>
          </InfoBox>
        </Base>
      </Background>
    </>
  );
};

export default MainInfo;
