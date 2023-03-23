import { useSelector } from 'react-redux';
import { getContacts, getLoadingStatus } from 'redux/selectors';
import { Route, Routes } from 'react-router-dom';
// import ContactList from './ContactList/ContactList';
// import Phonebook from './Phonebook/Phonebook';
// import Filter from './Filter/Filter';
// import Loader from './Loader/Loader';
// import RegisterForm from './RegisterForm/RegisterForm';
// import LoginForm from './LoginForm/LoginForm';
import Navigation from './Navigation/Navigation';
// import UserMenu from './UserMenu/UserMenu';
import Home from '../pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import NotFound from 'pages/NotFound';
import Contacts from 'pages/Contacts';

const App = () => {
  // const contacts = useSelector(getContacts);
  // const isLoading = useSelector(getLoadingStatus);
  return (
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
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <RegisterForm />
      <LoginForm />
      <Navigation />
      <UserMenu />
      <h2>Phonebook</h2>
      <Phonebook />
      <Filter />
      <h2>Contacts</h2>
      {isLoading && <Loader />}
      {contacts.length === 0 ? <i>-- no contacts here --</i> : <ContactList />} */}
    </div>
  );
};

export default App;
