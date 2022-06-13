import { CarouselItem } from "styles/common";
import Carousel from "components/common/Carousel";
import PersonCard from "./PersonCard";
import { useState } from "react";

const CrewCarousel = ({ name, crewList }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Carousel
      name={name}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      itemCount={crewList?.length}
      showCount={5}
    >
      {crewList?.map((crew) => (
        <CarouselItem activeIndex={activeIndex} key={crew.id}>
          <PersonCard
            id={crew.id}
            name={crew.name}
            profile_path={crew.profile_path}
            character={crew.character}
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default CrewCarousel;
