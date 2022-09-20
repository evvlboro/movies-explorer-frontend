import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__error-code">404</h1>
      <h2 className="not-found__error-text">Страница не найдена</h2>
      <Link to="/" className="not-found__back">Назад</Link>
    </section>
  );
}

export default NotFound;
