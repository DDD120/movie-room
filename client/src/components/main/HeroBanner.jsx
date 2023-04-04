import styled from "@emotion/styled";
import { breakpoint, colors, fontSize } from "styles/common";
import { MdLocalMovies } from "react-icons/md";
import LogoImg from "assets/logo.png";
import HeroBannerImg from "assets/hero-banner.png";

const Base = styled.article`
  margin: 40px auto;
  max-width: 1200px;
  width: 100%;
  aspect-ratio: 9/3;
  border-radius: 20px;
  background: url(${HeroBannerImg}) no-repeat right;
  background-size: contain;
  display: flex;
  align-items: center;
  font-size: ${fontSize.base};

  @media only screen and (max-width: ${breakpoint.sm}) {
    background: none;
  }
`;

const Box = styled.div`
  width: 60%;

  @media only screen and (max-width: ${breakpoint.sm}) {
    width: 100%;
  }
`;
const TitleBox = styled.div`
  font-size: ${fontSize.md};
  color: ${colors.black};
  display: flex;
  align-items: center;
`;
const Title = styled.span`
  width: 150px;

  img {
    width: 100%;
  }

  @media only screen and (max-width: ${breakpoint.md}) {
    width: 120px;
    transform: translateY(-2px);
  }
`;
const Phrase = styled.p`
  font-size: ${fontSize["2xl"]};
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  color: ${colors.black};
  line-height: 1.1;
  position: relative;
  left: -1px;
  margin-bottom: 4px;

  @media only screen and (max-width: ${breakpoint.md}) {
    font-size: ${fontSize.xl};
  }
`;
const List = styled.li`
  position: relative;
  margin-left: 10px;
  @media only screen and (max-width: ${breakpoint.md}) {
    font-size: ${fontSize.sm};
  }

  &::before {
    content: "";
    position: absolute;
    top: 4px;
    left: -8px;
    width: 4px;
    height: 16px;
    background-color: ${colors.orange};
    @media only screen and (max-width: ${breakpoint.md}) {
      height: 10px;
      top: 8px;
    }
  }
`;

const HeroBanner = ({ target }) => {
  return (
    <Base ref={target}>
      <Box>
        <TitleBox>
          <MdLocalMovies />
          <Title>
            <img src={LogoImg} alt="MOVIE ROOM 로고" />
          </Title>
        </TitleBox>
        <Phrase>Movie For You!</Phrase>
        <ul>
          <List>신규 및 현재 인기있는 영화 목록을 살펴보세요</List>
          <List>영화를 검색하여 상세 정보를 확인하세요</List>
          <List>즐겁게 본 영화의 리뷰를 작성하여 간직해보세요</List>
        </ul>
      </Box>
    </Base>
  );
};

export default HeroBanner;
