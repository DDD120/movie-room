import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { breakpoint, colors, fontSize } from "styles/common";
import Title from "./Title";
import { isMobile } from "react-device-detect";

const Base = styled.div`
  margin: 40px 0;
`;

const Box = styled.div`
  position: relative;
`;

const ArrowBtn = styled.button`
  position: absolute;
  top: 50%;
  transition: 0.2s;
  transform: translateY(-50%);
  z-index: 1;
  font-size: ${fontSize.xl};
  font-weight: bold;
  border-radius: 50%;
  background-color: transparent;
  color: ${colors.black};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${({ left }) => left && "-48px"};
  right: ${({ right }) => right && "-48px"};
  &:hover {
    color: ${colors.orange};
  }

  @media only screen and (max-width: ${breakpoint.md}) {
    display: none;
  }
`;

const CarouselList = styled.ul`
  display: flex;
  padding: 24px 0;
  overflow: auto;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Carousel = ({
  name,
  activeIndex,
  setActiveIndex,
  itemCount,
  showCount,
  children,
}) => {
  const [isShowLeftBtn, setIsShowLeftBtn] = useState(false);
  const [isShowRightBtn, setIsShowRightBtn] = useState(true);

  useEffect(() => {
    activeIndex ? setIsShowLeftBtn(true) : setIsShowLeftBtn(false);
    activeIndex + showCount < itemCount
      ? setIsShowRightBtn(true)
      : setIsShowRightBtn(false);
  }, [activeIndex, itemCount, showCount]);

  const handlePreClick = () => {
    setActiveIndex((activeIndex) => activeIndex - showCount);
  };

  const handleNextClick = () => {
    if (activeIndex < itemCount) {
      setActiveIndex((activeIndex) => activeIndex + showCount);
    }
  };

  return (
    <Base>
      {itemCount > 0 && (
        <>
          <Title>{name}</Title>
          <Box>
            {!isMobile && isShowLeftBtn && (
              <ArrowBtn left onClick={handlePreClick}>
                <RiArrowDropLeftLine />
              </ArrowBtn>
            )}
            <CarouselList>{children}</CarouselList>
            {!isMobile && isShowRightBtn && (
              <ArrowBtn right onClick={handleNextClick}>
                <RiArrowDropRightLine />
              </ArrowBtn>
            )}
          </Box>
        </>
      )}
    </Base>
  );
};

export default Carousel;
