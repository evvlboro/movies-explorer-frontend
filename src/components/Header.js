import logo from '../images/logo.svg';

function Header({ loggedIn }) {
  return (
    loggedIn ?
    (
      <div className='header__container'>
        <div className="header">
          <img src={logo} alt="logo" className="header__logo" />
          <div className="header__film-container">
            <button className='header__films-btn'>Фильмы</button>
            <button className='header__saved-films-btn'>Сохраненные фыльмы</button>
          </div>
          <button className="header__acc-btn" />
        </div>
      </div>
    ) :
    (
      <div className="header">
        <img src={logo} alt="logo" className="header__logo" />
        <div className="header__entry-buttons">
          <button className="header__sign-up">Регистрация</button>
          <button className="header__sign-in">Войти</button>
        </div>
      </div>
    )
  );
}

export default Header;
