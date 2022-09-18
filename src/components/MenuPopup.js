import { NavLink } from 'react-router-dom';

function MenuPopup({ isOpened, onClose }) {
  return (
    <div className={`popup ${isOpened && 'popup_opened'}`}>
      <div className="popup__routes">
        <button className="popup__close-btn" onClick={onClose}/>
        <NavLink
          to="/"
          className="popup__link"
          activeclassname="popup__link_active"
        >Главная</NavLink>
        <NavLink
          to="/movies"
          className={(navData) => navData.isActive ? "popup__link popup__link_active" : "popup__link"}
          activeclassname="popup__link_active"
        >Фильмы</NavLink>
        <NavLink
          to="/saved-movies"
          className={(navData) => navData.isActive ? "popup__link popup__link_active" : "popup__link"}
          activeclassname="popup__link_active"
        >Сохраненные фильмы</NavLink>
      </div>
      <NavLink to="/profile" ><button className="popup__acc-btn" /></NavLink>
    </div>
  );
}

export default MenuPopup;
