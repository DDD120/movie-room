import styled from "@emotion/styled";
import { useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { Common } from "styles/common";
import Title from "./Title";
import Card from "./Card";

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

  const prevButtonHandler = () => {
    setActiveIndex((activeIndex) => activeIndex - 1);
  };

  const nextButtonHandler = () => {
    if (activeIndex < movieList.length - 5) {
      setActiveIndex((activeIndex) => activeIndex + 1);
    }
  };

  return (
    <Base>
      <Title name={name} />
      <Container>
        <ArrowButton left onClick={prevButtonHandler}>
          <RiArrowDropLeftLine />
        </ArrowButton>
        <CarouselList>
          {movieList.map((movie, index) => (
            <CarouselItem activeIndex={activeIndex} key={index}>
              <Card
                poster_path={movie.img}
                title={movie.title}
                release_date={movie.release_date}
              />
            </CarouselItem>
          ))}
        </CarouselList>
        <ArrowButton right onClick={nextButtonHandler}>
          <RiArrowDropRightLine />
        </ArrowButton>
      </Container>
    </Base>
  );
};

export default Carousel;
