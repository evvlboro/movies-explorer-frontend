import logo from '../images/logo.svg';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <div className="header__entry-buttons">
        <button className="header__sign-up">Регистрация</button>
        <button className="header__sign-in">Войти</button>
      </div>
    </div>
  );
}

export default Header;
