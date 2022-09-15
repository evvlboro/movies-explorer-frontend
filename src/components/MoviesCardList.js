import React, { useState } from 'react';
import MoviesCard from "./MoviesCard";

function MoviesCardList({cards}){
  const [count, setCount] = useState(3);

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
            />
          ))
        }
      </div>
      <button
        className="movies-card-list__more-btn"
        onClick={() => {
          setCount(count + 3);
        }}>
          Ещё
        </button>
    </div>
  );
}

export default MoviesCardList;
