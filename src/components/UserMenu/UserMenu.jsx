import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import { requestLogout } from 'redux/user/operations';
import { FaRegUserCircle } from 'react-icons/fa';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const handleClick = () => {
    dispatch(requestLogout());
  };

  return (
    <div>
      <p>
        Welcome, {user.name} <FaRegUserCircle />
      </p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
