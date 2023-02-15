import { useCallback, useState } from "react";
import useInterval from "./useInterval";

const useTimer = () => {
  const [timeLimit, setTimeLimit] = useState(180);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(
    () => {
      if (timeLimit === 1) setIsRunning(false);
      setTimeLimit((prev) => prev - 1);
    },
    isRunning ? 1000 : null
  );

  const reset = useCallback(() => {
    setTimeLimit(180);
    setIsRunning(true);
  }, []);

  return { timeLimit, setTimeLimit, isRunning, setIsRunning, reset };
};

export default useTimer;
