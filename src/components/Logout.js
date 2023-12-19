import React from 'react';
import './Logout.css';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice'; 

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='logout'>
      <h1>
        Welcome<span className='user__name'>Tuba</span>
      </h1>
      <button className='logout__button' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
