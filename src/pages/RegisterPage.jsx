import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { singUp } from 'store/auth/operation';
import Swal from 'sweetalert2';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSabmit = e => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };

    dispatch(singUp(newUser))
      .unwrap()
      .then(() => {
        Swal.fire({
          title: 'Welcome in phonebook!',
          text: 'User created successful!',
        });
      })
      .catch(error => {
        if (error.keyValue && error.keyValue.email) {
          Swal.fire({
            text: `Email: ${error.keyValue.email} already used`,
          });
        } else if (error.message) {
          Swal.fire({
            text: error.message,
          });
        }
      });
  };

  return (
    <main>
      <section className="registration">
        <div className="container mt-4 ">
          <form onSubmit={handleSabmit}>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                User name
              </label>
              <input
                onChange={e => setName(e.target.value)}
                value={name}
                name="name"
                type="name"
                className="form-control"
                id="Username"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="InputEmail" className="form-label">
                Email address
              </label>
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                name="email"
                type="email"
                className="form-control"
                id="InputEmail"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="InputPassword" className="form-label">
                Password
              </label>
              <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                name="password"
                type="password"
                className="form-control"
                id="InputPassword"
                minLength="7"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
