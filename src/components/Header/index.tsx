import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, User } from './components';
import { REGISTERED_MENU_OPTIONS, UNREGISTERED_MENU_OPTIONS } from '../../constants/menuOptions';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import { logout } from '../../modules/Auth/redux/actions';
import './Header.scss';

function Header() {
  const { isAuth, user: { name }} = useSelector((state: IState) => state.auth);
  const dispatch = useDispatch();

  return (
    <header className="header">
    <div className='header__container'>
      <Logo />
      {!isAuth && (
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
      {isAuth && (
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
          <User name={name || ''} logout={() => dispatch(logout())}/>
        </>
      )}
    </div>
  </header>
  );
} 

export default Header;
