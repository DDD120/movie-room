import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { Common } from "styles/common";
import Title from "./Title";

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

const Carousel = ({
  name,
  activeIndex,
  setActiveIndex,
  itemCount,
  showCount,
  children,
}) => {
  const [leftBtnShow, setLeftBtnShow] = useState(false);
  const [rightBtnShow, setRightBtnShow] = useState(true);

  useEffect(() => {
    activeIndex ? setLeftBtnShow(true) : setLeftBtnShow(false);
    activeIndex + showCount < itemCount
      ? setRightBtnShow(true)
      : setRightBtnShow(false);
  }, [activeIndex, itemCount, showCount]);

  const prevButtonHandler = () => {
    setActiveIndex((activeIndex) => activeIndex - showCount);
  };

  const nextButtonHandler = () => {
    if (activeIndex < itemCount) {
      setActiveIndex((activeIndex) => activeIndex + showCount);
    }
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
        <CarouselList>{children}</CarouselList>
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
