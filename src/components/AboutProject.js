function AboutProject() {
    return (
        <div className="block">
          <div className="block__title">
            <p className="block__text">О проекте</p>
          </div>
          <div className="block__main-text">
            <div className="block__main-text-container">
              <div className="block__main-text_size_l">
                <p className="block__text">
                  Дипломный проект включал 5 этапов
                </p>
              </div>
              <div className="block__main-text_size_s">
                <p className="block__text">
                  Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                </p>
              </div>
            </div>
            <div className="block__main-text-container">
              <div className="block__main-text_size_l">
                <p className="block__text">
                  На выполнение диплома ушло 5 недель
                </p>
              </div>
              <div className="block__main-text_size_s">
                <p className="block__text">
                  У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                </p>
              </div>
            </div>
          </div>
          <table className="progress-table">
            <tr>
              <td className="progress-table__green-cell">1 неделя</td>
              <td className="progress-table__gray-cell">4 недели</td>
            </tr>
            <tr>
              <td className="progress-table__transparent-cell">Back-end</td>
              <td className="progress-table__transparent-cell">Front-end</td>
            </tr>
          </table>
        </div>
    );
}

export default AboutProject;
