import React, { useState } from 'react';
import MoviesCard from "./MoviesCard";

function MoviesCardList({cards, fromSavedPage}){
  // let initalCount = Math.trunc((window.screen.width - 140) / 364);
  let initalCount = 3;
  const addCount = 3;
  if(fromSavedPage === true) {
    initalCount = cards.length;
  }
  const [count, setCount] = useState(initalCount);

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        {
          cards.slice(0, count).map((card, i) => (
            <MoviesCard
              key={card._id}
              title={card.title}
              duration={card.duration}
              imgUrl={card.imgUrl}
              fromSavedPage={fromSavedPage}
            />
          ))
        }
      </div>
      {
        fromSavedPage !== true ?
          (
            <button
              className="movies-card-list__more-btn"
              type="button"
              onClick={() => {
                setCount(count + addCount);
              }}>
              Ещё
            </button>
          ) : (<></>)
      }

    </section>
  );
}

export default MoviesCardList;
