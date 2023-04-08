import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoadingUser, getLoggedInStatus } from 'redux/selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(getLoggedInStatus);
  const isLoading = useSelector(getLoadingUser);

  return !isLoggedIn && !isLoading ? <Navigate to={redirectTo} /> : Component;
}
