import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';


function Header({ loggedIn }) {
  return (
    loggedIn ?
    (
      <div className='header__container'>
        <div className="header">
            <Link to="/"><img src={logo} alt="logo" className="header__logo" /></Link>
          <div className="header__film-container">
              <Link to="/movies" className='header__films-btn'>Фильмы</Link>
              <Link to="/saved-movies" className='header__saved-films-btn'>Сохраненные фыльмы</Link>
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
