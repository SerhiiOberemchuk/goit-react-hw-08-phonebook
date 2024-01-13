import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectisLoggedIn, selectisRefreshing } from 'store/auth/selector';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  const isRefreshing = useSelector(selectisRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
