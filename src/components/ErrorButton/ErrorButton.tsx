import React from 'react';
import './errorButton.css';

export const ErrorButton = () => {

  const handleClick = (e: any) => {
    e.preventDefault();
    throw new Error('Just cute error');
  }

  return (
    <button className='error-button' onClick={handleClick}>Error Button!</button>
  )
}