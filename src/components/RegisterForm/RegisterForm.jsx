import React from 'react';

const RegisterForm = () => {
  const handleSubmit = () => {};

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input type="text" name="name" />
        </label>
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

export default RegisterForm;
