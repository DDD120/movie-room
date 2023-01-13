import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { Common } from "styles/common";
import Title from "./Title";
import { isMobile } from "react-device-detect";

const Base = styled.div`
  margin: 40px 0;
`;

const CarouseContainer = styled.div`
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
  left: ${({ left }) => left && "-48px"};
  right: ${({ right }) => right && "-48px"};
  &:hover {
    color: ${Common.colors.orange};
  }

  @media only screen and (max-width: 768px) {
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

  const handlePreBtnClick = () => {
    setActiveIndex((activeIndex) => activeIndex - showCount);
  };

  const handleNextBtnClick = () => {
    if (activeIndex < itemCount) {
      setActiveIndex((activeIndex) => activeIndex + showCount);
    }
  };

  return (
    <Base>
      {itemCount > 0 && (
        <>
          <Title name={name} />
          <CarouseContainer>
            {!isMobile && isShowLeftBtn && (
              <ArrowButton left onClick={handlePreBtnClick}>
                <RiArrowDropLeftLine />
              </ArrowButton>
            )}
            <CarouselList>{children}</CarouselList>
            {!isMobile && isShowRightBtn && (
              <ArrowButton right onClick={handleNextBtnClick}>
                <RiArrowDropRightLine />
              </ArrowButton>
            )}
          </CarouseContainer>
        </>
      )}
    </Base>
  );
};

export default Carousel;
