import FilterCheckbox from './FilterCheckbox';

function SearchForm() {
  return (
    <div className="search-form__container">
      <div className="search-form">
        <input className="search-form__input" placeholder='Фильм'/>
        <button className="search-form__btn" />
      </div>
      <FilterCheckbox />
    </div>
  )
}

export default SearchForm;
