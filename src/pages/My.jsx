import Container from "components/common/Container";
import MyProfile from "components/my/MyProfile";
import MyReview from "components/my/MyReview";
import useProtectedRoute from "hooks/useProtectedRoute";

const My = () => {
  useProtectedRoute();
  return (
    <Container>
      <MyProfile />
      <MyReview />
    </Container>
  );
};

export default My;
