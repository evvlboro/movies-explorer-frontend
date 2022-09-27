import React from 'react';

import Header from './Header';
import SearchForm from './SearchForm';
import Footer from './Footer';
import MoviesCardList from './MoviesCardList';
import Preloader from './Preloader';

import { getSavedMovies } from '../utils/MainApi';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function SavedMovies({ loggedIn }) {
  const [savedMovies, setSavedMoives] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [isInitial, setIsInitial] = React.useState(true);
  const [request, setRequest] = React.useState('');
  const [shorts, setShorts] = React.useState(true);
  const [cardsUpdate, setCardsUpdate] = React.useState(0);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setLoading(true);
    getSavedMovies(localStorage.getItem('jwt'))
      .then((data) => {
        setLoading(false);

        const userData = data.filter((movie) => {
          return movie.owner === currentUser._id;
        });

        setSavedMoives(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cardsUpdate, currentUser._id]);

  const onSubmitForm = () => {
    setIsInitial(false);

    const filteredCards = savedMovies.filter((element) => {
      if (!shorts && element.duration < 40)
        return false;
      else if (element.owner !== currentUser._id) {
        return false;
      }
      else if (element.nameRU.toLowerCase().includes(request.toLowerCase())
        || element.nameEN.toLowerCase().includes(request.toLowerCase()))
        return true;
      else
        return false;
    });

    setSavedMoives(filteredCards);
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
              cards={savedMovies}
              fromSavedPage={true}
              savedMovies={savedMovies}
              cardsUpdate={cardsUpdate}
              setCardsUpdate={setCardsUpdate}
              // requestError={requestError}
            />
        }
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
