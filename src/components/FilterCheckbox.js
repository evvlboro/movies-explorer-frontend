function FilterCheckbox() {
  return (
    <div className="checkbox__container">
      <label className="checkbox__label">
        <input className="checkbox" type="checkbox" id="checkbox" />
        <span></span>
      </label>
      <p className="checkbox__label-text">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;
