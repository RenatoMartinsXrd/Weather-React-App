import React from 'react'
import Select from 'react-select';
import styles from './InputSearch.module.css'

export const InputSearch = ({ options, defaultValue = '', ...restProps}) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      ...styles.container,
      border: state.isFocused ? '1px solid #aaa' : '1px solid #ccc',
      borderRadius: '20px',
    }),
  };

  return (
    <Select
      className="basic-single"
      styles={customStyles}
      defaultValue={defaultValue}
      isClearable
      isSearchable
      options={options}
      {...restProps}
  />
  )
}

