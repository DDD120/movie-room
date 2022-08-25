import styled from "@emotion/styled";
import bgImg from "assets/hero-banner.png";
import { Common } from "styles/common";
import { MdLocalMovies } from "react-icons/md";

const Banner = styled.article`
  margin: 40px auto;
  max-width: 1200px;
  width: 100%;
  aspect-ratio: 9/3;
  border-radius: 20px;
  background-color: aliceblue;
  background: url(${bgImg}) no-repeat right;
  background-size: contain;
  display: flex;
  align-items: center;
  font-size: 18px;

  @media only screen and (max-width: 835px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 560px) {
    font-size: 7px;
  }
`;

const TextContainer = styled.div`
  width: 60%;
`;
const TitleContainer = styled.div`
  font-size: 1.2em;
  color: ${Common.colors.black};
  display: flex;
  align-items: center;
`;
const Title = styled.span`
  width: 150px;

  @media only screen and (max-width: 835px) {
    width: 70px;
  }
  & > img {
    width: 100%;
  }
`;
const Phrase = styled.p`
  font-size: 4em;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  color: ${Common.colors.black};
  line-height: 1.1;
  position: relative;
  left: -1px;
  margin-bottom: 4px;
`;
const List = styled.li`
  position: relative;
  margin-left: 10px;
  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: -8px;
    width: 4px;
    height: 20px;
    background-color: ${Common.colors.orange};
    @media only screen and (max-width: 835px) {
      height: 10px;
    }
  }
`;

const HeroBanner = () => {
  return (
    <Banner>
      <TextContainer>
        <TitleContainer>
          <MdLocalMovies />
          <Title>
            <img src="/images/logo.png" alt="로고" />
          </Title>
        </TitleContainer>
        <Phrase>Movie For You!</Phrase>
        <ul>
          <List>신규 및 현재 인기있는 영화 목록을 살펴보세요</List>
          <List>영화를 검색하여 상세 정보를 확인하세요</List>
          <List>즐겁게 본 영화의 리뷰를 작성하여 간직해보세요</List>
        </ul>
      </TextContainer>
    </Banner>
  );
};

export default HeroBanner;
