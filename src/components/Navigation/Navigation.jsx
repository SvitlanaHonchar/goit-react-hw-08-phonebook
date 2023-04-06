import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { getLoggedInStatus } from 'redux/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(getLoggedInStatus);
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
