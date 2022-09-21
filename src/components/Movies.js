import Header from './Header';
import SearchForm from './SearchForm';
import Footer from './Footer';
import MoviesCardList from './MoviesCardList';

import cardExample1 from '../images/card-examples/example1.png';

const cards = [
  {
    _id: 1,
    title: '33 слова о дизайне',
    duration: '1ч 47м',
    imgUrl: cardExample1
  },
  {
    _id: 2,
    title: '33 слова о дизайне',
    duration: '1ч 47м',
    imgUrl: cardExample1
  },
  {
    _id: 3,
    title: '33 слова о дизайне',
    duration: '1ч 47м',
    imgUrl: cardExample1
  },
  {
    _id: 4,
    title: '33 слова о дизайне',
    duration: '1ч 47м',
    imgUrl: cardExample1
  },
  {
    _id: 5,
    title: '33 слова о дизайне',
    duration: '1ч 47м',
    imgUrl: cardExample1
  },
  {
    _id: 6,
    title: '33 слова о дизайне',
    duration: '1ч 47м',
    imgUrl: cardExample1
  },
  {
    _id: 7,
    title: '33 слова о дизайне',
    duration: '1ч 47м',
    imgUrl: cardExample1
  },
  {
    _id: 8,
    title: '33 слова о дизайне',
    duration: '1ч 47м',
    imgUrl: cardExample1
  },
  {
    _id: 9,
    title: '33 слова о дизайне',
    duration: '1ч 47м',
    imgUrl: cardExample1
  }
]

function Movies() {
  return (
    <>
      <Header loggedIn={true}/>
      <main>
        <SearchForm />
        <MoviesCardList cards={cards} />
      </main>
      <Footer />
    </>
  )
}

export default Movies;
