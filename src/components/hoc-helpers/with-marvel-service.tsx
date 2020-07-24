import React from 'react';
import { MarvelServiceConsumer } from '../marvel-service-context';

const withMarvelService = (mapMethodsToProps: any) => (Wrapped: any) => {
  return (props: any) => {
    return (
      <MarvelServiceConsumer>
        {(marvelService) => <Wrapped {...props} {...mapMethodsToProps(marvelService)} />}
      </MarvelServiceConsumer>
    )
  }
};

export default withMarvelService;