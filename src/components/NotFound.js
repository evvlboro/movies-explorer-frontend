function NotFound({navigate}) {
  return (
    <section className="not-found">
      <h1 className="not-found__error-code">404</h1>
      <h2 className="not-found__error-text">Страница не найдена</h2>
      <button className="not-found__back" onClick={() => navigate(-1)}>Назад</button>
    </section>
  );
}

export default NotFound;
