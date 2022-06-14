import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '../../../../assets/logo.svg';
import { ROUTES } from '../../../../constants/routes';
import './Logo.scss';

function Logo() {
  const navigate = useNavigate();
  return (
    <div className="logo__wrapper">
      <div className='logo' onClick={() => navigate(ROUTES.HOME)}>
        <img className='logo__icon' src={LogoIcon} alt="logo" />
        <div className='logo__name'>Кораблик</div>
      </div>
    </div>
  );
}

export default Logo;
