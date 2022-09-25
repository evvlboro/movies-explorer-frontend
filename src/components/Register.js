/* eslint-disable default-case */
import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Register({ onRegister, registerError }) {
  const [userData, setUserData] = React.useState({
    email: '',
    password: '',
    name: '',
  });

  const [nameDirty, setNameDirty] = React.useState(false);
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);

  const [nameError, setNameError] = React.useState('Имя не может быть пустым');
  const [emailError, setEmailError] = React.useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым');

  const [formValid, setFormValid] = React.useState(false);

  React.useEffect(() => {
    if (nameError || emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, passwordError]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setUserData({
      ...userData,
      [name]: value
    });

    switch(name) {
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
      case 'name':
        const reName = /^[a-яёa-z -]{2,30}$/i;
        if (String(value).length === 0) {
          setEmailError('Имя не может быть пустым');
        } else if (!value.match(reName)) {
          setNameError('Имя должно содержать только латиницу, кириллицу, пробел и дефис');
        } else {
          setNameError('');
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

    onRegister(userData);
  }

  const blurHandler = (evt) => {
    switch (evt.target.name) {
      case 'name':
        setNameDirty(true);
        break;
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
        <h2 className="auth__hello">Добро пожаловать!</h2>
        <form
          className="auth__form"
          action="#"
          onSubmit={handleSubmit}
        >
          <div className={`auth__input-container ${(nameDirty && nameError) && 'auth__input-container_error'}`}>
            <input
              type="text"
              className={`auth__input ${(nameDirty && nameError) && 'auth__input_error'}`}
              id="name"
              name="name"
              required
              value={userData.name}
              onChange={handleChange}
              onBlur={blurHandler}
            />
            <label htmlFor="name" className='auth__label'>Имя</label>
          </div>
          {(nameDirty && nameError) && <span className="auth__error">{nameError}</span>}
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
            {registerError && <span className='auth__server-error'>{registerError}</span>}
            <button
              type="submit"
              className="auth__submit-btn"
              disabled={!formValid}
            >Зарегистрироваться</button>
          </div>
          <p className="auth__text">
            Уже зарегистрированы?
            <Link to="/signin" className="auth__link">Войти</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Register;
