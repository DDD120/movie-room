import { useCheckTokenQuery } from "apis/server-api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "store/user";

export const useCheckToken = () => {
  const { data: user } = useCheckTokenQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(logout());
      return;
    }
    dispatch(login({ user }));
  }, [dispatch, user]);
};
