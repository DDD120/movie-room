import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

const useAuthRedirect = () => {
  const [searchParams] = useSearchParams();
  const next = searchParams.get("next") ?? "/";
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isLoggedIn) return;
    navigate(next);
  }, [isLoggedIn, navigate, next]);
};

export default useAuthRedirect;
