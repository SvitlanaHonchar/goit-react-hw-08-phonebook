import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
