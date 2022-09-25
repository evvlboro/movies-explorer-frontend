import { saveMovie } from '../utils/MainApi';

function MoviesCard({
  fromSavedPage,
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  nameRU,
  nameEN,
  thumbnail,
  movieId
}) {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  const hoursString = hours > 0 ? `${hours} ч` : '';
  const minutesString = minutes > 0 ? `${minutes} мин` : '';

  const handleSaveBtn = () => {
    const movie = {
      country: country,
      director: director,
      duration: duration,
      year: year,
      description: description,
      image: image,
      trailerLink: trailerLink,
      nameRU: nameRU,
      nameEN: nameEN,
      thumbnail: thumbnail,
      movieId: movieId
    };
    console.log(movie);
    console.log(localStorage.getItem('jwt'));
    saveMovie(
      localStorage.getItem('jwt'),
      {
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailerLink: trailerLink,
        nameRU: nameRU,
        nameEN: nameEN,
        thumbnail: thumbnail,
        movieId: movieId
      }
    ).then(()=> {
      console.log('film saved');
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <section className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <p className="movies-card__title">{nameRU}</p>
          <p className="movies-card__duration">{`${hoursString} ${minutesString}`}</p>
        </div>
        {
          fromSavedPage ?
            (<button className="movies-card__delete-btn" type="button" />) :
            (
              <button
                className="movies-card__save-btn"
                type="button"
                onClick={handleSaveBtn}
              />
            )
        }
      </div>
      <img src={image} alt={nameRU} className="movies-card__img" />
    </section>
  )
}

export default MoviesCard;
