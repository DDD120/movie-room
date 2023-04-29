import styled from "@emotion/styled";
import { breakpoint } from "styles/common";
import { motion } from "framer-motion";

const Base = styled(motion.li)`
  width: ${({ showcount }) => showcount && `calc(100%/${showcount})`};
  padding: 0 4px;
  flex: 0 0 ${({ showcount }) => showcount && `calc(100%/${showcount})`};
  transform: ${({ activeindex }) =>
    activeindex && `translateX(-${activeindex * 100}%)`};
  scroll-snap-align: start;
  img {
    width: 100%;
  }

  @media only screen and (max-width: ${breakpoint.md}) {
    width: ${({ showcount }) => showcount && `calc(100%/${showcount - 2})`};
    flex: 0 0 ${({ showcount }) => showcount && `calc(100%/${showcount - 2})`};
  }
`;

const CarouselItem = ({ children, activeIndex, showCount }) => {
  return (
    <Base showcount={showCount} activeindex={activeIndex}>
      {children}
    </Base>
  );
};

export default CarouselItem;
