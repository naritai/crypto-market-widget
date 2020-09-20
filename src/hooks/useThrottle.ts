import { useCallback } from "react";
import throttle from "lodash/throttle";

export const useThrottle = (callback: any, delay: number) => {
  const throttledCallback = useCallback(
    throttle(callback, delay), 
    [delay]
  );

  return throttledCallback;
};
