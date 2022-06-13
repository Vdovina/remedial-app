import React from 'react';
import LogoIcon from '../../../../assets/logo.svg';
import './Logo.scss';

function Logo() {
  return (
    <div className="logo__wrapper">
      <div className='logo'>
        <img className='logo__icon' src={LogoIcon} alt="logo" />
        <div className='logo__name'>Кораблик</div>
      </div>
    </div>
  );
}

export default Logo;
