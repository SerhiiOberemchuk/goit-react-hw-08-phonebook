import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'store/auth/operation';
import { selectUser } from 'store/auth/selector';
import Swal from 'sweetalert2';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut())
      .unwrap()
      .catch(error => {
        Swal.fire({ text: error.message });
      });
  };
  return (
    <div className="d-flex align-items-center">
      <p className="me-3 mt-auto mb-auto">Welcome {user.name.toUpperCase()}</p>
      <button className="btn btn-warning" type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
