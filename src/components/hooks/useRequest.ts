import { useState, useEffect, useMemo } from 'react';

const useRequest = (request: any) => {
  const initialState = useMemo(() => ({
    data: null,
    loading: true,
    error: false
  }), []);

  const [dataState, setDataState] = useState(initialState);

  useEffect(() => {
    let cancelled = false;
    setDataState(initialState);

    // this is already asunc function
    request()
      .then((data: any) => !cancelled && setDataState({
          data,
          loading: false,
          error: false
        }))
      .catch(() => setDataState({
        data: null,
        loading: false,
        error: true
      }));

      return () => { cancelled = true };
  }, [ request, initialState ]);

  return dataState;
}

export default useRequest;