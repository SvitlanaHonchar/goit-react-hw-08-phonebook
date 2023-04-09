import { Button, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { requestLogin } from 'redux/user/operations';
import { StyledForm, StyledH2 } from './LoginForm.styled';
import { theme } from '../../helpers/theme';
import { ThemeProvider } from '@mui/material/styles';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // console.log(form.elements.email.value, form.elements.password.value);
    dispatch(
      requestLogin({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledH2>- Log In -</StyledH2>
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
        <label>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            color="primary"
            type="email"
            name="email"
          />
        </label>
        <label>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            color="primary"
            type="password"
            name="password"
          />
        </label>
        <Button variant="outlined" color="secondary" type="submit">
          Log In
        </Button>
      </StyledForm>
    </ThemeProvider>
  );
};

export default LoginForm;
