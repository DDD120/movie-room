import Carousel from "components/common/Carousel";
import { useEffect, useState } from "react";
import { CarouselItem } from "styles/common";
import PersonCard from "./PersonCard";

const MainCastCarousel = ({ name, castList }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [castList]);

  return (
    <>
      {castList.length > 0 && (
        <Carousel
          name={name}
          itemCount={castList.length}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          showCount={5}
        >
          {castList.map((cast, index) => (
            <CarouselItem activeIndex={activeIndex} key={index}>
              <PersonCard
                name={cast.name}
                profile_path={cast.profile_path}
                character={cast.character}
              />
            </CarouselItem>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default MainCastCarousel;
