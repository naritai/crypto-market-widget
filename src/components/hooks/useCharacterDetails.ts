import {  useCallback, useContext } from 'react';
import useRequest from './useRequest';
import MarvelServiceContext from '../marvel-service-context/marvel-service-context';

const useCharacterDetails = (id: number) => {
  const { getCharacter } = useContext(MarvelServiceContext);
  const request = useCallback(() => getCharacter(id), [ id ]);

  return useRequest(request);
};

export default useCharacterDetails;