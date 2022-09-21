function FilterCheckbox() {
  return (
    <section className="checkbox__container">
      <label className="checkbox__label">
        <input className="checkbox" type="checkbox" id="checkbox" defaultChecked/>
        <span></span>
      </label>
      <p className="checkbox__label-text">Короткометражки</p>
    </section>
  )
}

export default FilterCheckbox;
