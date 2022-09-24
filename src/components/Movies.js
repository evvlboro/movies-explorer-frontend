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

  const onSubmitForm = () => {
    setLoading(true);

    moviesApi.getInitalCardsList()
      .then((initalCards) => {
        console.log(initalCards);
        setCards(initalCards);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
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
        />
        {
          loading ?
          <Preloader /> :
          <MoviesCardList cards={cards} />
        }
      </main>
      <Footer />
    </>
  )
}

export default Movies;
