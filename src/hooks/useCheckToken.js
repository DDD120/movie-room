import { useCheckTokenQuery } from "apis/server-api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "store/user";

export const useCheckToken = () => {
  const { data: user } = useCheckTokenQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useCheckToken user", user);
    if (!user || user.type === "FAIL_CHECK_TOKEN") return;
    dispatch(setUser({ user: user.user }));
  }, [dispatch, user]);
};
