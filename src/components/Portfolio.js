/* eslint-disable jsx-a11y/anchor-is-valid */
import linkIcon from '../images/link-icon.png';

function Portfolio() {
  return (
    <section className="block block__porfolio-container">
      <div className="block__main-text_size_xxs block__portfolio">
        <p className="block__text">Портфолио</p>
      </div>
      <ul className="block__link-container-list">
        <li className="block__link-container">
          <a href="https://github.com/evvlboro/how-to-learn" className="block__link-text" target="_blank" rel="noreferrer">
            Статичный сайт
          </a>
          <a href="https://github.com/evvlboro/how-to-learn" target="_blank" rel="noreferrer">
            <img src={linkIcon} className="block__link-icon" alt="linkIcon" />
          </a>
        </li>
        <li className="block__link-container">
          <a href="https://github.com/evvlboro/russian-travel" className="block__link-text" target="_blank" rel="noreferrer">
            Адаптивный сайт
          </a>
          <a href="https://github.com/evvlboro/russian-travel" target="_blank" rel="noreferrer">
            <img src={linkIcon} className="block__link-icon" alt="linkIcon" />
          </a>
        </li>
        <li className="block__link-container">
          <a href="https://github.com/evvlboro/mesto" className="block__link-text"target="_blank" rel="noreferrer">
            Одностраничное приложение
          </a>
          <a href="https://github.com/evvlboro/mesto" target="_blank" rel="noreferrer">
            <img src={linkIcon} className="block__link-icon" alt="linkIcon" />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
