import React from 'react';
import FilterCheckbox from './FilterCheckbox';
import moviesApi from '../utils/MoviesApi';

function SearchForm({request, setRequest, onSubmit, shorts, setShorts}) {

  const [error, setError] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(request === '' ) {
      setError('Нужно ввести ключевое слово');
    } else {
      onSubmit();
    }
  }

  const handleRequestChange = (event) => {
    const {value} = event.target;

    setRequest(value);
  }

  return (
    <form
      className="search-form__container"
      onSubmit={handleSubmit}
    >
      <div className={`search-form ${error && 'search-form_error'}`}>
        <input
          className="search-form__input"
          placeholder='Фильм'
          name="request"
          value={request || ""}
          onChange={handleRequestChange}
        />
        <button
          className="search-form__btn"
          type="submit"
        />
      </div>
      {
        error &&
        <span className='search-form__error'>{error}</span>
      }
      <FilterCheckbox
        shorts={shorts}
        setShorts={setShorts}
      />
    </form>
  )
}

export default SearchForm;
