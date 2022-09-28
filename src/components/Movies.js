import React from 'react';

import Header from './Header';
import SearchForm from './SearchForm';
import Footer from './Footer';
import MoviesCardList from './MoviesCardList';
import Preloader from './Preloader';

import moviesApi from '../utils/MoviesApi';
import { getSavedMovies } from '../utils/MainApi';

function Movies({loggedIn, firstSubmit, setFirstSubmit}) {
  const [cards, setCards] = React.useState(JSON.parse(localStorage.getItem('cards')) || []);
  const [fCards, setFCards] = React.useState(JSON.parse(localStorage.getItem('fCards')) || [])
  const [loading, setLoading] = React.useState(false);
  const [request, setRequest] = React.useState(localStorage.getItem('request') || '');
  const [shorts, setShorts] = React.useState(localStorage.getItem('shorts') === 'true');
  const [requestError, setRequestError] = React.useState(false);
  const [isInitial, setIsInitial] = React.useState(true);
  const [savedMovies, setSavedMoives] = React.useState([]);

  const filterCards = () => {
    return cards.filter((element) => {
      if (!shorts && element.duration < 40)
        return false;
      else if (element.nameRU.toLowerCase().includes(request.toLowerCase())
        || element.nameEN.toLowerCase().includes(request.toLowerCase()))
        return true;
      else
        return false;
    });
  }

  const onSubmitForm = () => {
    if (firstSubmit)
    {
      setIsInitial(false);
      setLoading(true);
      setFirstSubmit(false);
      moviesApi.getInitalCardsList()
        .then((initalCards) => {
          setCards(initalCards);
          localStorage.setItem('cards', JSON.stringify(initalCards));
          localStorage.setItem('request', request);
          localStorage.setItem('shorts', shorts);
          setFCards(filterCards());
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
          setRequestError(true);
      });
    } else{
      localStorage.setItem('request', request);
      localStorage.setItem('shorts', shorts);
      setFCards(filterCards());
    }
  }

  React.useEffect(() => {
    getSavedMovies(localStorage.getItem('jwt'))
      .then((data) => {
        setSavedMoives(data);
      })
      .catch((error) => {
        console.log(error);
      });
      // console.log(filterCards());
      // setFCards(filterCards());
  }, []);

  React.useEffect(() => {
    localStorage.setItem('fCards', JSON.stringify(fCards));
    setFCards(filterCards());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards])

  React.useEffect(() => {
    localStorage.setItem('shorts', shorts);
    setFCards(filterCards());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shorts]);

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
            cards={fCards}
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
