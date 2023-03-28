import styled from "@emotion/styled";
import { breakpoint } from "styles/common";
import { motion } from "framer-motion";

const Base = styled(motion.li)`
  width: ${({ showcount }) => showcount && `calc(100%/${showcount})`};
  padding: 0 4px;
  flex: 0 0 ${({ showcount }) => showcount && `calc(100%/${showcount})`};
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
    <Base
      showcount={showCount}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transform: `translateX(-${activeIndex * 100}%)` }}
      transition={{
        ease: "easeInOut",
      }}
    >
      {children}
    </Base>
  );
};

export default CarouselItem;
