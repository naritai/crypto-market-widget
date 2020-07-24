import { useState, useEffect, useMemo } from 'react';

const useRequest = (request: any) => {
  const initialState = useMemo(() => ({
    data: null,
    loading: true,
    error: false
  }), []);
  const [dataState, setDataState] = useState(initialState);

  useEffect(() => {
    setDataState(initialState);

    request()
      .then(onItemLoaded)
      .catch(onError)
  }, [ request, initialState ]);

  const onItemLoaded = (data: any) => {
    setDataState({
      data,
      loading: false,
      error: false
    });
  };

  const onError = () => {
    setDataState({
      data: null,
      loading: false,
      error: true
    });
  };

  return dataState;
}

export default useRequest;