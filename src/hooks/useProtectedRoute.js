import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useProtectedRoute = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { id } = useSelector((state) => state.user.user);

  useEffect(() => {
    isLoggedIn ? navigate(`/my/${id}`) : navigate("/login");
  }, [isLoggedIn, navigate, id]);
};

export default useProtectedRoute;
