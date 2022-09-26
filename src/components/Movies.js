import React from 'react';

import Header from './Header';
import SearchForm from './SearchForm';
import Footer from './Footer';
import MoviesCardList from './MoviesCardList';
import Preloader from './Preloader';

import moviesApi from '../utils/MoviesApi';
import { getSavedMovies } from '../utils/MainApi';

function Movies({loggedIn}) {
  const [cards, setCards] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [request, setRequest] = React.useState('');
  const [shorts, setShorts] = React.useState(localStorage.getItem('shorts') === 'true');
  const [requestError, setRequestError] = React.useState(false);
  const [isInitial, setIsInitial] = React.useState(true);
  const [savedMovies, setSavedMoives] = React.useState([]);

  const onSubmitForm = () => {
    setIsInitial(false);
    setLoading(true);

    moviesApi.getInitalCardsList()
      .then((initalCards) => {
        const filteredCards = initalCards.filter((element) => {
          if (!shorts && element.duration < 40)
            return false;
          else if (element.nameRU.includes(request) || element.nameEN.includes(request))
            return true;
          else
            return false;
        })

        setCards(filteredCards);
        setLoading(false);
        localStorage.setItem('cards', JSON.stringify(filteredCards));

        getSavedMovies(localStorage.getItem('jwt'))
          .then((data) => {
            setSavedMoives(data);
            localStorage.setItem('savedMovies', JSON.stringify(data));
          })
          .catch((error) => {
            console.log(error);
          })
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setRequestError(true);
    });

    localStorage.setItem('request', request);
  }

  React.useEffect(() => {
    const requestFromLocalStorage = localStorage.getItem('request') || '';
    const cardsFromLocalStorage = JSON.parse(localStorage.getItem('cards')) || [];
    const savedMoviesFromLocalStorage = JSON.parse(localStorage.getItem('savedMovies')) || [];

    setRequest(requestFromLocalStorage);
    setCards(cardsFromLocalStorage);
    setSavedMoives(savedMoviesFromLocalStorage)
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main>
        <SearchForm
          request={request}
          setRequest={setRequest}
          onSubmit={onSubmitForm}
          shorts={shorts}
          setShorts={setShorts}
        />
        {
          loading ?
          <Preloader /> :
          <MoviesCardList
            isInitial={isInitial}
            cards={cards}
            requestError={requestError}
            savedMovies={savedMovies}
          />
        }
      </main>
      <Footer />
    </>
  )
}

export default Movies;
