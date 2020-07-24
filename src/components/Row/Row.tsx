import React from 'react';

export const Row = ({ left, right }: any) => {
  return (
    <div className='row mb-2'>
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  )
};