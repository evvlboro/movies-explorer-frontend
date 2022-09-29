/* eslint-disable default-case */
import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Login({ onLogin, loginError }) {
  const [userData, setUserData] = React.useState({
    email: '',
    password: ''
  });

  const [emailDirty, setEmailDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);

  const [emailError, setEmailError] = React.useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым');

  const [formValid, setFormValid] = React.useState(false);

  React.useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserData({
      ...userData,
      [name]: value
    });

    switch (name) {
      case 'email':
        const reEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (String(value).length === 0) {
          setEmailError('Email не может быть пустым');
        } else if (!value.match(reEmail)) {
          setEmailError('Некорректный email')
        } else {
          setEmailError('');
        }
        break;
      case 'password':
        if (String(value).length === 0) {
          setPasswordError('Пароль не может быть пустым');
        } else {
          setPasswordError('');
        }
        break;
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onLogin(userData);
  }

  const blurHandler = (evt) => {
    switch (evt.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  }

  return (
    <section className="auth">
      <div className="auth__container">
        <Link to="/"><img src={logo} alt="logo" className="auth__logo" /></Link>
        <h2 className="auth__hello">Рады видеть!</h2>
        <form
          className="auth__form"
          action="#"
          onSubmit={handleSubmit}
        >
          <div className={`auth__input-container auth__input-container_margin_24 ${(emailDirty && emailError) && 'auth__input-container_error'}`} >
            <input
              type="email"
              className={`auth__input ${(emailDirty && emailError) && 'auth__input_error'}`}
              id="email"
              name="email"
              required
              value={userData.email}
              onChange={handleChange}
              onBlur={blurHandler}
            />
            <label htmlFor="email" className='auth__label'>E-mail</label>
          </div>
          {(emailDirty && emailError) && <span className="auth__error">{emailError}</span>}
          <div className={`auth__input-container auth__input-container_margin_24  ${(passwordDirty && passwordError) && 'auth__input-container_error'}`}>
            <input
              type="password"
              className={`auth__input ${(passwordDirty && passwordError) && 'auth__input_error'}`}
              id="password"
              name="password"
              required
              value={userData.password}
              onChange={handleChange}
              onBlur={blurHandler}
            />
            <label htmlFor="password" className='auth__label'>Пароль</label>
          </div>
          {(passwordDirty && passwordError) && <span className="auth__error">{passwordError}</span>}

          <div className="auth__btn-container">
            {loginError && <span className='auth__server-error'>{loginError}</span>}
            <button
              type="submit"
              className="auth__submit-btn"
              disabled={!formValid}
            >Войти</button>
          </div>
          <p className="auth__text">
            Ещё не зарегистрированы?
            <Link to="/signup" className="auth__link">Регистрация</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login;
