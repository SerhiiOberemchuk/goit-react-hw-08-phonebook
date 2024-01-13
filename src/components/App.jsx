import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Layout from './Layout';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import Contacts from 'pages/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { refreshUser } from 'store/auth/operation';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
