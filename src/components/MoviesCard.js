import React from 'react';
import { saveMovie, deleteMovie } from '../utils/MainApi';

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
  isSaved
}) {
  const [isSavedState, setIsSavedState] = React.useState(isSaved);

  

  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  const hoursString = hours > 0 ? `${hours} ч` : '';
  const minutesString = minutes > 0 ? `${minutes} мин` : '';

  const handleSaveBtn = () => {
    if (isSavedState) {

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
        console.log(movie._id);
        setIsSavedState(true);
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
            (<button className="movies-card__delete-btn" type="button" />) :
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
