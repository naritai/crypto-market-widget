import React from 'react';
import './header.css';

export const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo'>
        Logo
      </div>
      <ul className='main-menu'>
        <li className='main-menu__item'>Films</li>
        <li className='main-menu__item'>About</li>
        <li className='main-menu__item'>Contacts</li>
      </ul>
    </div>
  )
};