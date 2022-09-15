import Header from './Header';
import SearchForm from './SearchForm';
import Footer from './Footer';
import MoviesCard from './MoviesCard';

import cardExample1 from '../images/card-examples/example1.png';

function Movies() {
  return (
    <>
      <Header loggedIn={true}/>
      <SearchForm />
      <MoviesCard
        title='33 слова о дизайне'
        duration='1ч 47м'
        imgUrl={cardExample1}
      />
      <Footer />
    </>
  )
}

export default Movies;
