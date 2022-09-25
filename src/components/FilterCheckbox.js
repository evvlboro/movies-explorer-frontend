import React from "react";

function FilterCheckbox({shorts, setShorts}) {
  const handleChange = (event) => {
    setShorts(event.target.checked);
    localStorage.setItem('shorts', event.target.checked);
  }

  return (
    <section className="checkbox__container">
      <label className="checkbox__label">
        <input
          className="checkbox"
          type="checkbox"
          id="checkbox"
          defaultChecked={shorts}
          onChange={handleChange}
        />
        <span></span>
      </label>
      <p className="checkbox__label-text">Короткометражки</p>
    </section>
  )
}

export default FilterCheckbox;
