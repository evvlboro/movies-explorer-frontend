import FilterCheckbox from './FilterCheckbox';

function SearchForm() {
  return (
    <form className="search-form__container">
      <div className="search-form">
        <input className="search-form__input" placeholder='Фильм' required />
        <button className="search-form__btn" type="submit"/>
      </div>
      <FilterCheckbox />
    </form>
  )
}

export default SearchForm;
