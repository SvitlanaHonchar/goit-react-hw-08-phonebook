import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { getLoggedInStatus } from 'redux/selectors';
import Button from '@mui/material/Button';
import { StyledHeader, StyledNav } from './Navigation.styled';
import { theme } from '../../helpers/theme';
import { ThemeProvider } from '@mui/material/styles';

const Navigation = () => {
  const isLoggedIn = useSelector(getLoggedInStatus);
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledHeader>
          <StyledNav>
            <NavLink to="/" className="navLink--page">
              Home
            </NavLink>
            {isLoggedIn ? (
              <>
                <NavLink to="/contacts" className="navLink--page">
                  Contacts
                </NavLink>
                <div className="auth">
                  <UserMenu />
                </div>
              </>
            ) : (
              <div className="auth">
                <NavLink to="/login">
                  <Button variant="outlined" color="secondary">
                    log in
                  </Button>
                </NavLink>
                <NavLink to="/register">
                  <Button variant="contained">register</Button>
                </NavLink>
              </div>
            )}
          </StyledNav>
        </StyledHeader>
      </ThemeProvider>
      <Outlet />
    </>
  );
};

export default Navigation;
