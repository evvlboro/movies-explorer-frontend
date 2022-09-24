function MoviesCard({title, duration, imgUrl, fromSavedPage}) {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  const hoursString = hours > 0 ? `${hours} ч` : '';
  const minutesString = minutes > 0 ? `${minutes} мин` : '';

  return (
    <section className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <p className="movies-card__title">{title}</p>
          <p className="movies-card__duration">{`${hoursString} ${minutesString}`}</p>
        </div>
        {
          fromSavedPage ?
            (<button className="movies-card__delete-btn" type="button" /> ) :
            (<button className="movies-card__save-btn" type="button" /> )
        }
      </div>
      <img src={imgUrl} alt={title} className="movies-card__img" />
    </section>
  )
}

export default MoviesCard;
