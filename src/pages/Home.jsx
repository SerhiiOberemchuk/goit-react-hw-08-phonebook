import React from 'react';
import { Helmet } from 'react-helmet';
const Home = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <h1> Welcome in phonebook! Pleause LogIn or Register</h1>
    </div>
  );
};

export default Home;
