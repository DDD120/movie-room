import Carousel from "components/common/Carousel";
import CarouselItem from "components/common/CarouselItem";
import { useEffect, useState } from "react";
import PersonCard from "./PersonCard";

const MainCastCarousel = ({ name, castList }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [castList]);

  return (
    <Carousel
      name={name}
      itemCount={castList.length}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      showCount={5}
    >
      {castList?.map((cast, index) => (
        <CarouselItem
          showCount={5}
          activeIndex={activeIndex}
          key={cast.character + index}
        >
          <PersonCard
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
