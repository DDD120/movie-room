import styled from "@emotion/styled";

export const Common = {
  colors: {
    black: "#1A3642",
    beige: "#FEE0C8",
    red: "#D0433A",
    orange: "#FD7D36",
    cyan: "#50ADB5",
    grey: "#768186",
    white: "#fff",
  },
};

export const CarouselItem = styled.li`
  width: 20%;
  padding: 0 4px;
  flex: 0 0 20%;
  transition: 200ms ease;
  transform: ${(props) => `translateX(-${props.activeIndex * 100}%)`};
  > img {
    width: 100%;
  }
`;
