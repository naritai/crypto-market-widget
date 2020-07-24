import React from 'react';
import { ItemDetails, Record } from '../ItemDetails';
// import { withMarvelService, compose } from '../hoc-helpers/';

const ComicsDetails = (props: any) => {
  return (
    <ItemDetails {...props}>
      <Record field='modified' label='Modified' />
      <Record field='format' label='Format' />
      <Record field='pageCount' label='Page count' />
      <Record field='description' label='Description' />
    </ItemDetails>
  )
};

export default ComicsDetails;

// const mapMethodsToProps = (marvelService: any) => {
//   return {
//     getData: marvelService.getComics
//   };
// };

// export default compose(
//                   withMarvelService(mapMethodsToProps)
//                 )(ComicsDetails);