import React from 'react';

const withChildFunction = (fn: any) => (Wrapped: any) => {
  return (props: any) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
};

export default withChildFunction;