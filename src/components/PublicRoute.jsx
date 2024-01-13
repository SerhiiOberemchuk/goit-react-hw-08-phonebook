import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectisLoggedIn } from 'store/auth/selector';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
