import styled from "@emotion/styled";

export const colors = {
  black: "#1A3642",
  beige: "#FEE0C8",
  red: "#D0433A",
  orange: "#FD7D36",
  orangeOpacity: "#fd7c3662",
  cyan: "#50ADB5",
  lightgray: "#afb5b8",
  greyOpacity: "#76818699",
  grey: "#768186",
  white: "#fff",
};

export const CarouselItem = styled.li`
  width: ${({ showCount }) => showCount && `calc(100%/${showCount})`};
  padding: 0 4px;
  flex: 0 0 ${({ showCount }) => showCount && `calc(100%/${showCount})`};
  transition: 200ms ease;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
  scroll-snap-align: start;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: ${({ showCount }) => showCount && `calc(100%/${showCount - 2})`};
    flex: 0 0 ${({ showCount }) => showCount && `calc(100%/${showCount - 2})`};
  }
`;

export const CarouselContainer = styled.section`
  margin: 0 0 120px 0;
`;

export const NoImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1.416;
  border-radius: 12px;
  object-fit: cover;
  padding: 12px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.black};
  background-color: ${colors.lightgray};
  font-size: 0.875rem;
`;
