import figure from '../images/figure.png'

function Promo() {
    return (
      <section className="promo">
            <div className="promo__title">
              <p className="promo__title_text">Учебный проект студента факультета Веб-разработки.</p>
            </div>
            <img src={figure} alt="figure" className="promo__figure"/>
      </section>
    );
}

export default Promo;
