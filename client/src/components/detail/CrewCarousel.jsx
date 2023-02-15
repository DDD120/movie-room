import Carousel from "components/common/Carousel";
import CarouselItem from "components/common/CarouselItem";
import { useEffect, useState } from "react";
import PersonCard from "./PersonCard";

const CrewCarousel = ({ name, crewList }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [crewList]);

  return (
    <Carousel
      name={name}
      itemCount={crewList.length}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      showCount={5}
    >
      {crewList?.map((crew) => (
        <CarouselItem showCount={5} activeIndex={activeIndex} key={crew.id}>
          <PersonCard
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
