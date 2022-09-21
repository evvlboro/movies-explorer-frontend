import student from '../images/student.png';

function AboutMe() {
  return (
    <section className="block">
      <div className="block__title">
        <p className="block__text">Студент</p>
      </div>
      <div className="block__about-student-container">
        <img src={student} alt="studentImage" className="block__student-image_mobile" />
        <div className="block__about-student">
          <div className="block__main-text_size_xl block__name">
            <p className="block__text">Евгений</p>
          </div>
          <div className="block__main-text_size_xxs block__main-text_margin_18">
            <p className="block__text">Фронтенд-разработчик, 25 лет</p>
          </div>
          <div className="block__main-text_size_xs">
            <p className="block__text">
              Я родился и живу в Минске.
              Закончил факультет прикладной математики и информатики БГУ.
              В IT я уже более 4-ех лет, однако фронтэнд разработкой занимаюсь около 2-ух.
              До этого работал в таких компаниях как: Центр банковских технологий, Белтелеком, GoHard.
              Для улучшения своих навыков прохожу курс веб разработки от Яндекс Практикума.
            </p>
          </div>
          <div className="block__main-text_size_es block__main-text_margin_77">
            <p className="block__text">Github</p>
          </div>
        </div>
        <img src={student} alt="studentImage" className="block__student-image"/>
      </div>
    </section>
  )
}

export default AboutMe;
