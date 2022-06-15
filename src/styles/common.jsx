import styled from "@emotion/styled";

export const Common = {
  colors: {
    black: "#1A3642",
    beige: "#FEE0C8",
    red: "#D0433A",
    orange: "#FD7D36",
    cyan: "#50ADB5",
    lightgray: "#afb5b8",
    grey: "#768186",
    white: "#fff",
  },
};

export const CarouselItem = styled.li`
  width: 20%;
  padding: 0 4px;
  flex: 0 0 20%;
  transition: 200ms ease;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
  > img {
    width: 100%;
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
  color: ${Common.colors.black};
  background-color: ${Common.colors.lightgray};
  font-size: 0.875rem;
`;
