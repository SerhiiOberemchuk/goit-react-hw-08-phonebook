import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { singUp } from 'store/auth/operation';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSabmit = e => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(singUp(newUser));
    e.currentTarget.reset();
    navigation('/login');
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
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$"
            minLength="10"
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
