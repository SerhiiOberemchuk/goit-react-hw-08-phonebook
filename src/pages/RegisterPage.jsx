import React, { useEffect } from 'react';
import { HelmetData } from 'react-helmet-async';

import { useDispatch, useSelector } from 'react-redux';

import { singUp } from 'store/auth/operation';
import { registerError } from 'store/auth/selector';

const helmetData = new HelmetData({});

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isError = useSelector(registerError);
  useEffect(() => {
    if (!isError) {
      return;
    } else if (isError.keyValue && isError.keyValue.email) {
      alert(`Email: ${isError.keyValue.email} already used`);
    } else if (isError.message) {
      alert(isError.message);
    }
  }, [isError]);

  const handleSabmit = e => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    dispatch(singUp(newUser));

    e.currentTarget.reset();
  };

  return (
    <div className="container mt-4 maine_box">
      <form onSubmit={handleSabmit}>
        <div className="mb-3">
          <label htmlFor="Username" className="form-label">
            User name
          </label>
          <input
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
            name="password"
            type="text"
            className="form-control"
            id="InputPassword"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
