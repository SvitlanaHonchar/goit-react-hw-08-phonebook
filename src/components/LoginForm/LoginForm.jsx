import React from 'react';
import { useDispatch } from 'react-redux';
import { requestLogin } from 'redux/user/operations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.email.value, form.elements.password.value);
    dispatch(
      requestLogin({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default LoginForm;
