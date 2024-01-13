import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'store/auth/operation';
import { selectUser } from 'store/auth/selector';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="d-flex align-items-center">
      <p className="me-3 mt-auto mb-auto">Welcome {user.name.toUpperCase()}</p>
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
