import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import { requestLogout } from 'redux/user/operations';
import { FaRegUserCircle } from 'react-icons/fa';
import Button from '@mui/material/Button';
import { StyledDiv } from './UserMenu.styled';
import { theme } from '../../helpers/theme';
import { ThemeProvider } from '@mui/material/styles';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const handleClick = () => {
    dispatch(requestLogout());
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <p>
          <FaRegUserCircle /> {user.name}
        </p>
        <Button variant="outlined" color="secondary" onClick={handleClick}>
          log out
        </Button>
      </StyledDiv>
    </ThemeProvider>
  );
};

export default UserMenu;
