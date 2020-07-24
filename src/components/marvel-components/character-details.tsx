import React from 'react';
import { ItemDetails, Record } from '../ItemDetails/';
// import { withMarvelService, compose } from '../hoc-helpers/';

const CharacterDetails = (props: any) => {
  return (
    <ItemDetails {...props} >
      <Record field='modified' label='Modified' />
    </ItemDetails>
  )
};

export default CharacterDetails;

// const mapMethodsToProps = (marvelService: any) => {
//   return {
//     getData: marvelService.getCharacter
//   }
// };

// export default compose(
//                   withMarvelService(mapMethodsToProps)
//                 )(CharacterDetails);