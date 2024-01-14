import { Navigate, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';

import { refreshUser } from 'store/auth/operation';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/Home'));
const Layout = lazy(() => import('./Layout/Layout'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Suspense
        fallback={
          <>
            <Loader />
            <p>Loading....</p>
          </>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route
              path="/register"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
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
      </Suspense>
    </>
  );
};
