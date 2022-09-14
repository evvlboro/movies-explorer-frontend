import figure from '../images/figure.png'
import Header from './Header';

function Promo({ loggedIn }) {
    return (
        <div className="promo">
            <Header
              loggedIn={loggedIn}
            />
            <div className="promo__title">
              <p className="promo__title_text">Учебный проект студента факультета Веб-разработки.</p>
            </div>
            <img src={figure} alt="figure" className="promo__figure"/>
        </div>
    );
}

export default Promo;
