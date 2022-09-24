import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Login({ onLogin }) {
  const [userData, setUserData] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onLogin(userData);
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
          <div className="auth__input-container">
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

          <button type="submit" className="auth__submit-btn auth__submit-btn_margin_220">Войти</button>
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
