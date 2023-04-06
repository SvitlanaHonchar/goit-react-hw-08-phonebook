import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { requestRefresh } from 'redux/user/operations';
import { getLoadingUser } from 'redux/selectors';
import Navigation from './Navigation/Navigation';
import PrivateRoute from './UserMenu/PrivateRoute';
import RestrictedRoute from './UserMenu/RestrictedRoute';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const NotFound = lazy(() => import('pages/NotFound'));
const Contacts = lazy(() => import('pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadingUser);

  useEffect(() => {
    dispatch(requestRefresh());
  }, [dispatch]);

  return isLoading ? (
    <p>Refreshing User...</p>
  ) : (
    <div
      style={{
        marginLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route
              path="login"
              element={
                <RestrictedRoute component={<Login />} redirectTo="/contacts" />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={<Register />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute component={<Contacts />} redirectTo="/login" />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
