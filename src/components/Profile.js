import Header from './Header';

function Profile() {
  return (
    <div className="profile">
      <Header
        loggedIn={true}
      />
      <form className="profile__conatainer">
        <h2 className="profile__hello">Привет, Евгений!</h2>
        <div className="profile__input-container profile__input-container_border_on">
          <label htmlFor="input-name" className="profile__label">Имя</label>
          <input type="text" className="profile__input" id="input-name" name="input-name" defaultValue="Евгений" />
        </div>
        <div className="profile__input-container profile__input-container_margin_17">
          <label htmlFor="input-email" className="profile__label">E-mail</label>
          <input type="email" className="profile__input" id="input-email" name="input-email" defaultValue="evvlboro@yandex.by" />
        </div>
        <button className="profile__update">Редактировать</button>
        <button className="profile__logout">Выйти из аккаунта</button>
      </form>
    </div>
  );
}

export default Profile;
