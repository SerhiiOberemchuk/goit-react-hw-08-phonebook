import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'store/auth/operation';
import { logInError } from 'store/auth/selector';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isError = useSelector(logInError);
  useEffect(() => {
    if (isError) {
      Swal.fire({
        text: 'Email address or Password is not correct!',
      });
    }
  }, [isError]);
  const handleSubmit = e => {
    e.preventDefault();
    const userLogIn = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(logIn(userLogIn));
    e.currentTarget.reset();
  };
  return (
    <main>
      <section className="login">
        <div className="container mt-4 maine_box">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
