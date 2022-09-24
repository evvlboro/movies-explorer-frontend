import React, { useState } from 'react';
import logo from '../images/logo.svg';
import MenuPopup from './MenuPopup';
import { Link } from 'react-router-dom';


function Header({ loggedIn }) {
  const [ popupIsOpened, setPopupIsOpened ] = useState(false);

  const onMenuBtnClick = () => {
    setPopupIsOpened(!popupIsOpened);
  }

  const onCloseMenuPopup = () => {
    setPopupIsOpened(false);
  }

  return (
    <>
      <MenuPopup isOpened={popupIsOpened} onClose={onCloseMenuPopup} />
      { loggedIn ?
        (
          <header className='header__container'>
            <div className="header">
                <Link to="/"><img src={logo} alt="logo" className="header__logo" /></Link>
              <div className="header__film-container">
                  <Link to="/movies" className='header__films-btn'>Фильмы</Link>
                  <Link to="/saved-movies" className='header__saved-films-btn'>Сохраненные фыльмы</Link>
              </div>
              <Link to="/profile" ><button className="header__acc-btn" type="button"/></Link>
              <button className="header__menu-btn" onClick={onMenuBtnClick} type="button" />
            </div>
          </header>
        ) :
        (
          <header className="header header__notlog">
            <Link to="/"><img src={logo} alt="logo" className="header__logo" /></Link>
            <div className="header__entry-buttons">
              <Link to="/signup"><button className="header__sign-up" type="button">Регистрация</button></Link>
              <Link to="/signin"><button className="header__sign-in" type="button">Войти</button></Link>
            </div>
          </header>
        )
      }
    </>
  );
}

export default Header;
