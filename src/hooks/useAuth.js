import { useSelector } from 'react-redux';
import {
  selectUser,
  selectisLoggedIn,
  selectisRefreshing,
} from 'store/auth/selector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  const isRefreshing = useSelector(selectisRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
