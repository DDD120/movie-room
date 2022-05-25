import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { Common } from "styles/common";
import Title from "./Title";
import Card from "./MovieCard";

const Base = styled.div`
  margin: 40px 0;
`;

const Container = styled.div`
  position: relative;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transition: 0.2s;
  transform: translateY(-50%);
  z-index: 1;
  font-size: 48px;
  font-weight: bold;
  border-radius: 50%;
  background-color: transparent;
  color: ${Common.colors.black};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${(props) => props.left && "-48px"};
  right: ${(props) => props.right && "-48px"};
  &:hover {
    color: ${Common.colors.orange};
  }
`;

const CarouselList = styled.ul`
  display: flex;
  padding: 24px 0;
  overflow: hidden;
`;

const CarouselItem = styled.li`
  width: 20%;
  padding: 0 4px;
  flex: 1 0 20%;
  transition: 200ms ease;
  transform: ${(props) => `translateX(-${props.activeIndex * 100}%)`};
  > img {
    width: 100%;
  }
`;

const Carousel = ({ name, movieList }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [leftBtnShow, setLeftBtnShow] = useState(false);
  const [rightBtnShow, setRightBtnShow] = useState(true);

  useEffect(() => {
    activeIndex ? setLeftBtnShow(true) : setLeftBtnShow(false);
    activeIndex < 15 ? setRightBtnShow(true) : setRightBtnShow(false);
  }, [activeIndex, movieList.length]);

  const prevButtonHandler = () => {
    setActiveIndex((activeIndex) => activeIndex - 5);
  };

  const nextButtonHandler = () => {
    activeIndex < 15 && setActiveIndex((activeIndex) => activeIndex + 5);
  };

  return (
    <Base>
      <Title name={name} />
      <Container>
        {leftBtnShow && (
          <ArrowButton left onClick={prevButtonHandler}>
            <RiArrowDropLeftLine />
          </ArrowButton>
        )}
        <CarouselList>
          {movieList.map((movie) => (
            <CarouselItem activeIndex={activeIndex} key={movie.id}>
              <Card
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
              />
            </CarouselItem>
          ))}
        </CarouselList>
        {rightBtnShow && (
          <ArrowButton right onClick={nextButtonHandler}>
            <RiArrowDropRightLine />
          </ArrowButton>
        )}
      </Container>
    </Base>
  );
};

export default Carousel;
