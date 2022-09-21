import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Login() {
  return (
    <section className="auth">
      <div className="auth__container">
        <Link to="/"><img src={logo} alt="logo" className="auth__logo" /></Link>
        <h2 className="auth__hello">Рады видеть!</h2>
        <form className="auth__form">
          <div className="auth__input-container">
            <input type="email" className="auth__input" id="input-email"/>
            <label htmlFor="input-email" className='auth__label'>E-mail</label>
          </div>
          <div className="auth__input-container auth__input-container_margin_24">
            <input type="password" className="auth__input auth__input_error" id="input-password"/>
            <label htmlFor="input-password" className='auth__label'>Пароль</label>
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
