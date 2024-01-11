import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Layout from './Layout';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import Contacts from 'pages/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { useAuth } from 'hooks';
import { refreshUser } from 'store/auth/operation';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
// import { ToastContainer } from 'react-toastify';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // console.log(isRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  // return (
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      {/* <ToastContainer /> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route
            path="/register"
            element={
              // <RegisterPage />
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              ></RestrictedRoute>
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<Contacts />}
              ></PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
