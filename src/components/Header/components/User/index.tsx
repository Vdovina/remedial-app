import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../../redux/store';
import ExitIcon from '../../../../assets/exit.svg';

interface UserProps {
  name: string,
  logout: () => void,
}

function User({ name, logout } : UserProps) {
  return (
    <div className="user__wrapper">
      <div className='user'>
        {name}
      </div>
      <div className='user__exit-btn' onClick={logout}>
        <img src={ExitIcon} alt="Exit" />
      </div>
    </div>
  );
}

export default User;
