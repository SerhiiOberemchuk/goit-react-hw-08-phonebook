import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'store/auth/operation';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const userLogIn = {
      email,
      password,
    };
    dispatch(logIn(userLogIn))
      .unwrap()
      .then(() => {
        Swal.fire({
          text: 'LogIn is successful',
          timer: 2000,
          timerProgressBar: true,
        });
      })
      .catch(() =>
        Swal.fire({
          text: 'Email address or Password is not correct!',
        })
      );
  };
  return (
    <main>
      <section className="login  ">
        <div className="container mt-4 ">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">
                Email address
              </label>
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
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
                onChange={e => setPassword(e.target.value)}
                value={password}
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
