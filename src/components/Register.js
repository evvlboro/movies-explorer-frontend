import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Register() {
  return (
    <div className="auth">
      <div className="auth__container">
        <Link to="/"><img src={logo} alt="logo" className="auth__logo" /></Link>
        <h2 className="auth__hello">Добро пожаловать!</h2>
        <form className="auth__form">
          <div className="auth__input-container">
            <input type="text" className="auth__input" id="input-name"/>
            <label htmlFor="input-name" className='auth__label'>Имя</label>
          </div>
          <div className="auth__input-container auth__input-container_margin_24 auth__input-container_error">
            <input type="email" className="auth__input" id="input-email"/>
            <label htmlFor="input-email" className='auth__label'>E-mail</label>
          </div>
          <div className="auth__input-container auth__input-container_margin_24">
            <input type="password" className="auth__input auth__input_error" id="input-password"/>
            <label htmlFor="input-password" className='auth__label'>Пароль</label>
          </div>
          <span className="auth__error">Что-то пошло не так...</span>

          <button type="submit" className="auth__submit-btn">Зарегистрироваться</button>
          <p className="auth__text">
            Уже зарегистрированы?
            <Link to="/signin" className="auth__link">Войти</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register;
