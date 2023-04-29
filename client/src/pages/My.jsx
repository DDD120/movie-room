import Container from "components/common/Container";
import MyProfile from "components/my/MyProfile";
import MyReview from "components/my/MyReview";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const My = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { id: myId } = useSelector((state) => state.user.user);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (myId !== id) {
      navigate("/");
    }
  }, [myId, id, navigate]);

  return (
    <Container>
      <MyProfile />
      <MyReview />
    </Container>
  );
};

export default My;
