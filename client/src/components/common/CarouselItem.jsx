import styled from "@emotion/styled";
import { breakpoint } from "styles/common";
import { motion } from "framer-motion";

const Base = styled(motion.li)`
  width: ${({ showCount }) => showCount && `calc(100%/${showCount})`};
  padding: 0 4px;
  flex: 0 0 ${({ showCount }) => showCount && `calc(100%/${showCount})`};
  scroll-snap-align: start;
  img {
    width: 100%;
  }

  @media only screen and (max-width: ${breakpoint.md}) {
    width: ${({ showCount }) => showCount && `calc(100%/${showCount - 2})`};
    flex: 0 0 ${({ showCount }) => showCount && `calc(100%/${showCount - 2})`};
  }
`;

const CarouselItem = ({ children, activeIndex, ...rest }) => {
  return (
    <Base
      {...rest}
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
