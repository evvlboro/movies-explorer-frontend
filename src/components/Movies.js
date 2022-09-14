import Header from './Header';
import SearchForm from './SearchForm';

function Movies() {
  return (
    <>
      <Header loggedIn={true}/>
      <SearchForm />
    </>
  )
}

export default Movies;
