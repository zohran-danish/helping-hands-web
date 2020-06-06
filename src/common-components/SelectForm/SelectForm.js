import React from 'react'
import './SelectForm.scss'

const SelectForm = ({ options, value, setValue, label }) => {
  let activeClass = ''
  return (
    <div className={`select-form__container`}>
      <div className={`select-form__heading`}>
        {label}
      </div>
      {options.map((optionText, index) => {
        activeClass = ''
        if (value === optionText) {
          activeClass = 'select-form__active'
        }
        return (
          <div
            className={`select-form__options ${activeClass}`}
            key={index}
            onClick={(e) => setValue(e.target.innerText)}
          >
            {optionText}
          </div>
        )
      })}
    </div>
  )
}

export default SelectForm