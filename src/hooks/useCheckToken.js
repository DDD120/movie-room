import { useCheckTokenQuery } from "apis/server-api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "store/user";

export const useCheckToken = () => {
  const { data: user } = useCheckTokenQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user || user.type === "FAIL_CHECK_TOKEN") {
      dispatch(logout());
      return;
    }
    dispatch(login({ user: user.user }));
  }, [dispatch, user]);
};
