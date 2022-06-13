import styled from "@emotion/styled";
import Carousel from "components/common/Carousel";
import PersonCard from "./PersonCard";
import { useState } from "react";

const CarouselItem = styled.li`
  width: 20%;
  padding: 0 4px;
  flex: 1 0 20%;
  transition: 200ms ease;
  transform: ${(props) => `translateX(-${props.activeIndex * 100}%)`};
  > img {
    width: 100%;
  }
`;

const MainCastCarousel = ({ name, castList }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Carousel
      name={name}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      itemCount={castList?.length}
      showCount={5}
    >
      {castList?.map((cast) => (
        <CarouselItem activeIndex={activeIndex} key={cast.id}>
          <PersonCard
            id={cast.id}
            name={cast.name}
            profile_path={cast.profile_path}
            character={cast.character}
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default MainCastCarousel;
