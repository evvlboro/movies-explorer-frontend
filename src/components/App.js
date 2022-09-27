import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

import { register, authorize, getUserInfo } from '../utils/MainApi.js';

import Main from './Main';
import Movies from './Movies';
import SavedMovies from './SavedMovies';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import NotFound from './NotFound';
import { ProtectedRoute } from './ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [registerError, setRegisterError] = React.useState('');
  const [loginError, setLoginError] = React.useState('');

  const navigate = useNavigate();

  function handleRegister({email, name, password}) {
    register(email, password, name)
      .then(() => {
        //здесь нужно сразу залогинить пользователя и отправить его на страницу с фильмами
        handleLogin({email, password});
        navigate('/movies');
      })
      .catch((error) => {
        setRegisterError(error);
        console.log(error);
      });
  }

  function handleLogin({email, password}) {
    authorize(email, password)
      .then(data => {
        console.log(data);
        if (!data) throw new Error('Неверные имя пользователя или пароль')
        if (data.token) {
          console.log(loggedIn)
          setLoggedIn(true);
          console.log('setLoggedIn(true)');
          // console.log(loggedIn)
          localStorage.setItem('jwt', data.token);
          navigate('/movies');
        }
      }).catch(error => {
        setLoginError(error);
        console.log(error);
      });
  };

  React.useEffect(() => {
    getUserInfo(localStorage.getItem('jwt'))
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main  loggedIn={loggedIn} fromMainPage={true}/>} />

        <Route path="/movies" element={<Movies loggedIn={loggedIn}/>} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signup" element={<Register onRegister={handleRegister} registerError={registerError}/>} />
        <Route path="/signin" element={<Login onLogin={handleLogin} loginError={loginError}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
