import React from 'react';
import MoviesCard from "./MoviesCard";
import { useWindowSize } from '../utils/hooks/useWindowSize';

const BASE_URL = 'https://api.nomoreparties.co';

function MoviesCardList({
  cards,
  fromSavedPage = false,
  requestError = '',
  isInitial,
  savedMovies,
  cardsUpdate,
  setCardsUpdate
}){
  const [cardsCount, setCardsCount] = React.useState(1);
  const [addCount, setAddCount] = React.useState(1);
  const [windowWidth] = useWindowSize();

  React.useEffect(() => {
    let padding = 0;
    let cardWIdth = 0;
    if (windowWidth >= 1280){
      padding = 70 ;
      cardWIdth = 364;
      setCardsCount(4 * Math.trunc((windowWidth - padding * 2) / cardWIdth));
      setAddCount(Math.trunc((windowWidth - padding * 2) / cardWIdth));
    } else if (windowWidth >= 768) {
      padding = 30;
      cardWIdth = 339;
      setCardsCount(4 * Math.trunc((windowWidth - padding * 2) / cardWIdth));
      setAddCount(Math.trunc((windowWidth - padding * 2) / cardWIdth));
    } else if (windowWidth >= 480) {
      padding = 10;
      cardWIdth = 300;
      setCardsCount(5);
      setAddCount(2);
    }
   }, [windowWidth]);

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        {
          requestError && (
            <p>
              Во время запроса произошла ошибка.
              Возможно, проблема с соединением или сервер недоступен.
              Подождите немного и попробуйте ещё раз.
            </p>
          )
        }
        {
          !requestError && cards.length > 0
            ? cards.slice(0, cardsCount).map((card) => {
              const thumbnail = fromSavedPage ? card.thumbnail : `${BASE_URL}${card.image.formats.thumbnail.url}`;
              const cardId = fromSavedPage ? card.movieId : card.id;
              const imageUrl = fromSavedPage ? card.image : `${BASE_URL}${card.image.url}`;

              return <MoviesCard
                key={cardId}
                fromSavedPage={fromSavedPage}
                country={card.country}
                director={card.director}
                duration={card.duration}
                year={card.year}
                description={card.description}
                image={imageUrl}
                trailerLink={card.trailerLink}
                nameRU={card.nameRU}
                nameEN={card.nameEN}
                thumbnail={thumbnail}
                movieId={cardId}
                savedMovies={savedMovies}
                cardsUpdate={cardsUpdate}
                setCardsUpdate={setCardsUpdate}
              />
              })
            : !isInitial && <p>Ничего не найдено</p>
        }
      </div>
      {
        (cards.length > 0 && cardsCount < cards.length) &&
        (
          <button
            className="movies-card-list__more-btn"
            type="button"
            onClick={() => {
              setCardsCount(cardsCount + addCount);
            }}>
            Ещё
          </button>
        )
      }
    </section>
  );
}

export default MoviesCardList;
