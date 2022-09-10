import logo from '../images/logo.svg';
import figure from '../images/figure.png'

function Promo() {
    return (
        <div className="promo">
            <div className="promo__header">
                <img src={logo} alt="logo" className="promo__header_logo" />
                <div className="promo__header_entry-buttons">
                  <button className="promo__header_sign-up">Регистрация</button>
                  <button className="promo__header_sign-in">Войти</button>
                </div>
            </div>
            <div className="promo__title">
              <p className="promo__title_text">Учебный проект студента факультета Веб-разработки.</p>
            </div>
            <img src={figure} alt="figure" className="promo__figure"/>
        </div>
    );
}

export default Promo;
