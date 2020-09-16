import useRequest from './useRequest';
import { useCallback, useContext } from 'react';
import MarvelServiceContext from '../marvel-service-context/marvel-service-context';

const useComicsDetails = (id: number) => {
  // const { getComics } = useContext(MarvelServiceContext);
  // const request = useCallback(() => getComics(id), [ id ]);
  // return useRequest(request);
  return "";
};

export default useComicsDetails;