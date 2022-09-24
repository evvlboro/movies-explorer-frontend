import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Register({ onRegister }) {
  const [userData, setUserData] = React.useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setUserData({
      ...userData,
      [name]: value
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onRegister(userData);
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
          <div className="auth__input-container">
            <input
              type="text"
              className="auth__input"
              id="name"
              name="name"
              required
              value={userData.name}
              onChange={handleChange}
            />
            <label htmlFor="name" className='auth__label'>Имя</label>
          </div>
          <div className="auth__input-container auth__input-container_margin_24 auth__input-container_error">
            <input
              type="email"
              className="auth__input"
              id="email"
              name="email"
              required
              value={userData.email}
              onChange={handleChange}
            />
            <label htmlFor="email" className='auth__label'>E-mail</label>
          </div>
          <div className="auth__input-container auth__input-container_margin_24">
            <input
              type="password"
              className="auth__input auth__input_error"
              id="password"
              name="password"
              required
              value={userData.password}
              onChange={handleChange}
            />
            <label htmlFor="password" className='auth__label'>Пароль</label>
          </div>
          <span className="auth__error">Что-то пошло не так...</span>

          <button type="submit" className="auth__submit-btn">Зарегистрироваться</button>
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
