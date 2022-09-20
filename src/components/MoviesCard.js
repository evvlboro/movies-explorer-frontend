function MoviesCard({title, duration, imgUrl, fromSavedPage}) {
  return (
    <section className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <p className="movies-card__title">{title}</p>
          <p className="movies-card__duration">{duration}</p>
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
