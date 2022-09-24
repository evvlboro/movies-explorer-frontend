import React from 'react';

import Header from './Header';
import SearchForm from './SearchForm';
import Footer from './Footer';
import MoviesCardList from './MoviesCardList';
import Preloader from './Preloader';

import moviesApi from '../utils/MoviesApi';

function Movies({loggedIn}) {
  const [cards, setCards] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [request, setRequest] = React.useState('');
  const [shorts, setShorts] = React.useState(true);
  const [requestError, setRequestError] = React.useState(false);
  const [isInitial, setIsInitial] = React.useState(true);

  const onSubmitForm = () => {
    setIsInitial(false);
    setLoading(true);

    moviesApi.getInitalCardsList()
      .then((initalCards) => {
        setCards(initalCards.filter((element) => {
          if (!shorts && element.duration < 40)
            return false;
          else if (element.nameRU.includes(request) || element.nameEN.includes(request))
            return true;
          else
            return false;
        }));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setRequestError(true);
      });
  }

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
          />
        }
      </main>
      <Footer />
    </>
  )
}

export default Movies;
