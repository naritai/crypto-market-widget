import { useCallback } from "react";
import throttle from "lodash/throttle";

export const useThrottle = (callback: (value: any) => void, delay: number) => {
  const throttledCallback = useCallback(
    throttle(callback, delay), 
    [delay]
  );

  return throttledCallback;
};
