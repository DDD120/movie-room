import styled from "@emotion/styled";
import { breakpoint, colors } from "styles/common";

const Base = styled.div`
  margin: 40px 0;
`;

const Title = styled.div`
  width: 100px;
  height: 40px;
  background-color: ${colors.grey};
  border-radius: 50px;
`;

const CarouselList = styled.ul`
  display: flex;
  padding: 24px 0;
  overflow: hidden;
`;

const CarouselItem = styled.li`
  width: 20%;
  padding: 0 4px;
  flex: 0 0 20%;
  overflow: hidden;
  border-radius: 12px;

  @media only screen and (max-width: ${breakpoint.md}) {
    width: 33.3%;
    flex: 0 0 33.3%;
  }
`;

const Img = styled.div`
  position: relative;
  aspect-ratio: 1 / 1.416;
  width: 100%;
  overflow: hidden;
  background-color: ${colors.lightgray};
  margin-bottom: 6px;
  border-radius: 12px;
`;

function SkeletonCarousel() {
  return (
    <Base>
      <Title />
      <CarouselList>
        <CarouselItem>
          <Img />
        </CarouselItem>
        <CarouselItem>
          <Img />
        </CarouselItem>
        <CarouselItem>
          <Img />
        </CarouselItem>
        {window.innerWidth > 864 && (
          <>
            <CarouselItem>
              <Img />
            </CarouselItem>
            <CarouselItem>
              <Img />
            </CarouselItem>
          </>
        )}
      </CarouselList>
    </Base>
  );
}

export default SkeletonCarousel;
