/* eslint-disable jsx-a11y/anchor-is-valid */
import linkIcon from '../images/link-icon.png';

function Portfolio() {
  return (
    <div className="block block__porfolio-container">
      <div className="block__main-text_size_xxs block__portfolio">
        <p className="block__text">Портфолио</p>
      </div>
      <div className="block__link-container">
        <a href="#" className="block__link-text">
          Статичный сайт
        </a>
        <a href="#" >
          <img src={linkIcon} class="block__link-icon" alt="linkIcon" />
        </a>
      </div>
      <div className="block__link-container">
        <a href="#" className="block__link-text">
          Адаптивный сайт
        </a>
        <a href="#" >
          <img src={linkIcon} class="block__link-icon" alt="linkIcon" />
        </a>
      </div>
      <div className="block__link-container">
        <a href="#" className="block__link-text">
          Одностраничное приложение
        </a>
        <a href="#" >
          <img src={linkIcon} class="block__link-icon" alt="linkIcon" />
        </a>
      </div>
    </div>
  )
}

export default Portfolio;
