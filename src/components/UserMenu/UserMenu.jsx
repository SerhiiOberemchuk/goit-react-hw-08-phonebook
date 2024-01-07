import { useAuth } from 'hooks';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/auth/operation';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <div className="navbar-nav">
      <p className="nav-link">Welcome {user.name}</p>
      <button
        className="btn btn-warning"
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
