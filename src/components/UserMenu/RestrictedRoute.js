import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedInStatus } from 'redux/selectors';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(getLoggedInStatus);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
