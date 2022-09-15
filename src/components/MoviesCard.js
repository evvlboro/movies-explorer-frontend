function MoviesCard({title, duration, imgUrl}) {
  return (
    <div className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <p className="movies-card__title">{title}</p>
          <p className="movies-card__duration">{duration}</p>
        </div>
        <button className="movies-card__save-btn" />
      </div>
      <img src={imgUrl} alt={title} className="movies-card__img" />
    </div>
  )
}

export default MoviesCard;
