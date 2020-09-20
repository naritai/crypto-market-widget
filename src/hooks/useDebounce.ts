import { useCallback } from "react";
import debounce from "lodash/debounce";

export const useDebounce = (callback: (value: string) => void, delay: number) => {
  const debouncedCallback = useCallback(
    debounce(callback, delay),
    [delay]
  );

  return debouncedCallback;
};
