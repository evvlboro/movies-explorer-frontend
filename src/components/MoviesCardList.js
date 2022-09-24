import React from 'react';
import MoviesCard from "./MoviesCard";
import { useWindowSize } from '../utils/hooks/useWindowSize';

function MoviesCardList({cards, fromSavedPage, requestError, isInitial}){
  // let initalCount = Math.trunc((window.screen.width - 140) / 364);
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
          requestError ?
            <p>
              Во время запроса произошла ошибка.
              Возможно, проблема с соединением или сервер недоступен.
              Подождите немного и попробуйте ещё раз.
            </p> :
          cards.length > 0 ?
          cards.slice(0, cardsCount).map((card, i) => (
            <MoviesCard
              key={card.id}
              title={card.nameRU}
              duration={card.duration}
              imgUrl={` https://api.nomoreparties.co${card.image.url}`}
              fromSavedPage={fromSavedPage}
            />
          )) :
          !isInitial && <p>Ничего не найдено</p>
        }
      </div>
      {
        (fromSavedPage !== true && cards.length > 0 && cardsCount < cards.length ) &&
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
