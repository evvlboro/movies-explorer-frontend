import React from 'react';
import { saveMovie, deleteMovie } from '../utils/MainApi';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

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
  movieId,
  savedMovies,
  cardsUpdate,
  setCardsUpdate
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const isSaved = savedMovies.some((movie) => {
    return movie.movieId === movieId && movie.owner === currentUser._id;
  });

  const currentMovie = savedMovies.find((movie) => {
    return movie.movieId === movieId && movie.owner === currentUser._id;
  }) || '';

  const [isSavedState, setIsSavedState] = React.useState(isSaved);
  const [currentMovieId, setCurrentMovieId] = React.useState(currentMovie._id);

  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  const hoursString = hours > 0 ? `${hours} ч` : '';
  const minutesString = minutes > 0 ? `${minutes} мин` : '';

  const hadleRemoveBtn = () => {
    deleteMovie(
      localStorage.getItem('jwt'),
      currentMovieId)
      .then(() => {
        setIsSavedState(false);
        setCurrentMovieId('');
        setCardsUpdate(cardsUpdate + 1);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleSaveBtn = () => {
    if (isSavedState) {
      hadleRemoveBtn();
    } else {
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
      ).then((movie)=> {
        setIsSavedState(true);
        setCurrentMovieId(movie._id);
      }).catch((error)=>{
        console.log(error);
      })
      }
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
            (<button
              className="movies-card__delete-btn"
              type="button"
              onClick={hadleRemoveBtn}
              />
            ) :
            (
              <button
                className={`movies-card__save-btn ${isSavedState && 'movies-card__save-btn_active'}`}
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
