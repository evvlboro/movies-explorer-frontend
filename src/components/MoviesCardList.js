import React, { useState } from 'react';
import MoviesCard from "./MoviesCard";

function MoviesCardList({cards, fromSavedPage}){
  let initalCount = 3;
  if(fromSavedPage === true) {
    initalCount = cards.length;
  }
  const [count, setCount] = useState(initalCount);

  return (
    <div className="movies-card-list">
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
              onClick={() => {
                setCount(count + 3);
              }}>
              Ещё
            </button>
          ) : (<></>)
      }

    </div>
  );
}

export default MoviesCardList;
