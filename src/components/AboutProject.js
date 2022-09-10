function AboutProject() {
    return (
        <div className="about">
          <div className="about__title">
            <p className="about__text">О проекте</p>
          </div>
          <div className="about__main-text">
            <div className="about__main-text_container">
              <div className="about__main-text_big">
                <p className="about__text">
                  Дипломный проект включал 5 этапов
                </p>
              </div>
              <div className="about__main-text_small">
                <p className="about__text">
                  Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                </p>
              </div>
            </div>
            <div className="about__main-text_container">
              <div className="about__main-text_big">
                <p className="about__text">
                  На выполнение диплома ушло 5 недель
                </p>
              </div>
              <div className="about__main-text_small">
                <p className="about__text">
                  У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                </p>
              </div>
            </div>
          </div>
          <table className="about__progress-table">
            <tr>
              <td className="about__progress-table_green-cell">1 неделя</td>
              <td className="about__progress-table_gray-cell">4 недели</td>
            </tr>
            <tr>
              <td className="about__progress-table_transparent-cell">Back-end</td>
              <td className="about__progress-table_transparent-cell">Front-end</td>
            </tr>
          </table>
        </div>
    );
}

export default AboutProject;
