import styled from "@emotion/styled";
import bgImg from "assets/hero-banner.png";
import { Common } from "styles/common";
import { MdLocalMovies } from "react-icons/md";

const Banner = styled.article`
  margin: 40px;
  max-width: 1046px;
  height: 400px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;
const ImgContainer = styled.div`
  height: 100vh;
  background: url(${bgImg}) no-repeat top right;
`;
const TextContainer = styled.div`
  position: relative;
  top: 120px;
  left: 30px;
`;
const TitleContainer = styled.div`
  font-size: 22px;
  color: ${Common.colors.black};
  display: flex;
  align-items: center;
`;
const Title = styled.span`
  font-size: 24px;
  font-family: "Roboto", sans-serif;
`;
const Phrase = styled.p`
  font-size: 74px;
  font-family: "Roboto", sans-serif;
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
  }
`;

const HeroBanner = () => {
  return (
    <Banner>
      <ImgContainer>
        <TextContainer>
          <TitleContainer>
            <MdLocalMovies />
            <Title>MOVIE ROOM</Title>
          </TitleContainer>
          <Phrase>Movie For You!</Phrase>
          <ul>
            <List>신규 및 현재 인기있는 영화 목록을 살펴보세요</List>
            <List>영화를 검색하여 상세 정보를 확인하세요</List>
            <List>즐겁게 본 영화의 리뷰를 작성하여 간직해보세요</List>
          </ul>
        </TextContainer>
      </ImgContainer>
    </Banner>
  );
};

export default HeroBanner;
