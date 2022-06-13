import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, User } from './components';
import { REGISTERED_MENU_OPTIONS, UNREGISTERED_MENU_OPTIONS } from '../../constants/menuOptions';
import { AuthContext } from '../../helpers/auth/AuthContext';
import './Header.scss';

function Header() {
  return (
    <AuthContext.Consumer>
      {auth => (
        <header className="header">
        <div className='header__container'>
          <Logo />
          {!auth.isAuthenticated && (
            <div className="header__unregistered-panel">{
              UNREGISTERED_MENU_OPTIONS.map(option => (
                <Link
                  className='header__button'
                  key={option.name}
                  to={option.route}
                >
                  {option.title}
                </Link>
              ))
            }</div>
          )}
          {auth.isAuthenticated && (
            <>
              <div className="header__registered-panel">{
                REGISTERED_MENU_OPTIONS.map(option => (
                  <Link
                    className='header__button'
                    key={option.name}
                    to={option.route}
                  >
                    {option.title}
                  </Link>
                ))
              }</div>
              <User name={auth.userName || ''} logout={auth.logout}/>
            </>
          )}
        </div>
      </header>
      )}
    </AuthContext.Consumer>
  );
} 

export default Header;
