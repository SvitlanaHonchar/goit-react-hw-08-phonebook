import React from 'react';
import { useDispatch } from 'react-redux';
import { requestRegister } from 'redux/user/operations';
import { StyledForm, StyledH2 } from './RegisterForm.styled';
import { theme } from '../../helpers/theme';
import { ThemeProvider } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(
      form.elements.name.value,
      form.elements.email.value,
      form.elements.password.value
    );
    dispatch(
      requestRegister({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledH2>- Register -</StyledH2>
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
        <label>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            color="primary"
            type="text"
            name="name"
          />
        </label>
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
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </StyledForm>
    </ThemeProvider>
  );
};

export default RegisterForm;
