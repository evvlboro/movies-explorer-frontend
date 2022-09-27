/* eslint-disable default-case */
import React from 'react';
import Header from './Header';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Profile({ onLogout, onProfileUpdate, updateUserError, updateSuccess }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [userData, setUserData] = React.useState({
    name: currentUser.name,
    email: currentUser.email
  });

  const [nameDirty, setNameDirty] = React.useState(false);
  const [emailDirty, setEmailDirty] = React.useState(false);

  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  const [formValid, setFormValid] = React.useState(true);

  React.useEffect(() => {
    if (emailError || nameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, nameError]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setUserData({
      ...userData,
      [name]: value
    });

    switch (name) {
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
          setNameError('Имя не может быть пустым');
        } else if (!value.match(reName)) {
          setNameError('Имя должно содержать только латиницу, кириллицу, пробел и дефис');
        } else {
          setNameError('');
        }
        break;
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onProfileUpdate(userData);
  }

  const blurHandler = (evt) => {
    switch (evt.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
    }
  }

  return (
    <section className="profile">
      <Header
        loggedIn={true}
      />
      <form
        className="profile__conatainer"
        action="#"
        onSubmit={handleSubmit}
      >
        <h2 className="profile__hello">{`Привет, ${currentUser.name}!`}</h2>
        <div className="profile__input-container profile__input-container_border_on">
          <label htmlFor="name" className="profile__label">Имя</label>
          <input
            type="text"
            className="profile__input"
            id="name"
            name="name"
            required
            value={userData.name}
            onChange={handleChange}
            onBlur={blurHandler}
          />
        </div>
        {(nameDirty && nameError) && <span className="auth__error">{nameError}</span>}
        <div className="profile__input-container profile__input-container_margin_17">
          <label htmlFor="email" className="profile__label">E-mail</label>
          <input
            type="email"
            className="profile__input"
            id="email"
            name="email"
            required
            value={userData.email}
            onChange={handleChange}
            onBlur={blurHandler}
          />
        </div>
        {(emailDirty && emailError) && <span className="auth__error">{emailError}</span>}
        {updateUserError && <span className='auth__server-error'>{updateUserError}</span>}
        {updateSuccess && <span>Информация о пользователе успешно обновлена</span>}
        <button
          className="profile__update"
          type="submit"
          disabled={!formValid}
        >Редактировать</button>
        <button
          className="profile__logout"
          type="button"
          onClick={onLogout}
        >Выйти из аккаунта</button>
      </form>
    </section>
  );
}

export default Profile;
