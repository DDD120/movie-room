import Container from "components/common/Container";
import SkeletonCarousel from "./SkeletonCarousel";
import SkeletonMainInfo from "./SkeletonMainInfo";

const LoadingDetail = () => {
  return (
    <>
      <SkeletonMainInfo />
      <Container>
        <SkeletonCarousel />
        <SkeletonCarousel />
        <SkeletonCarousel />
      </Container>
    </>
  );
};

export default LoadingDetail;
