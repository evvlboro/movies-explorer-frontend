function Footer() {
  return (
    <div className="block footer">
      <div className="footer__title">
        <p className="block__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__container">
        <p className="block__text footer__year">© 2022</p>
        <div className="footer__right-corner">
          <a href="https://practicum.yandex.ru" target="_blank" rel="noreferrer" className="footer__link block__text footer__practicum-text">Яндекс.Практикум</a>
          <a href="https://github.com/evvlboro" target="_blank" rel="noreferrer" className="footer__link block__text ">Github</a>
        </div>
        <p className="block__text footer__year_mobile">© 2022</p>
      </div>
    </div>
  )
}

export default Footer;
