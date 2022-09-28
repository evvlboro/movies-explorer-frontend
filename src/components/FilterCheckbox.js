import React from "react";

function FilterCheckbox({shorts, setShorts}) {
  const handleChange = () => {
    setShorts(!shorts);
  }

  return (
    <section className="checkbox__container">
      <label className="checkbox__label">
        <input
          className="checkbox"
          type="checkbox"
          id="checkbox"
          checked={shorts}
          onChange={handleChange}
        />
        <span></span>
      </label>
      <p className="checkbox__label-text">Короткометражки</p>
    </section>
  )
}

export default FilterCheckbox;
