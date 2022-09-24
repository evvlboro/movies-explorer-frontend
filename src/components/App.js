import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

import { register, authorize } from '../utils/MainApi.js';

import Main from './Main';
import Movies from './Movies';
import SavedMovies from './SavedMovies';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import NotFound from './NotFound';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  const navigate = useNavigate();

  function handleRegister({email, name, password}) {
    register(email, password, name)
      .then(() => {
        //здесь нужно сразу залогинить пользователя и отправить его на страницу с фильмами
        handleLogin({email, password});
        navigate('/movies');
      })
      .catch((error) => {
        console.log(error);
        return console.log(error.message || 'Что-то пошло не так');
      });
  }

  function handleLogin({email, password}) {
    authorize(email, password)
      .then(data => {
        console.log(data);
        if (!data) throw new Error('Неверные имя пользователя или пароль')
        if (data.token) {
          setLoggedIn(true);
          localStorage.setItem('jwt', data.token);
          navigate('/movies');
        }
      }).catch(err => {
        console.log(err);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies loggedIn={loggedIn}/>} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signup" element={<Register onRegister={handleRegister}/>} />
        <Route path="/signin" element={<Login onLogin={handleLogin} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
