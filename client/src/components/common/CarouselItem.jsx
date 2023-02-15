import styled from "@emotion/styled";
import { breakpoint } from "styles/common";

const Base = styled.li`
  width: ${({ showCount }) => showCount && `calc(100%/${showCount})`};
  padding: 0 4px;
  flex: 0 0 ${({ showCount }) => showCount && `calc(100%/${showCount})`};
  transition: 200ms ease;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
  scroll-snap-align: start;
  img {
    width: 100%;
  }

  @media only screen and (max-width: ${breakpoint.md}) {
    width: ${({ showCount }) => showCount && `calc(100%/${showCount - 2})`};
    flex: 0 0 ${({ showCount }) => showCount && `calc(100%/${showCount - 2})`};
  }
`;

const CarouselItem = ({ children, ...rest }) => {
  return <Base {...rest}>{children}</Base>;
};

export default CarouselItem;
