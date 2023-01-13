import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const useProtectedRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { id } = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!isLoggedIn) {
      location.pathname === "/signup"
        ? navigate(`/signup`)
        : navigate("/login");
      return;
    }
    navigate(`/my/${id}`);
  }, [location.pathname, isLoggedIn, navigate, id]);
};

export default useProtectedRoute;
