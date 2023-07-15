import React from 'react'
import styles from './Home.module.css'
import { getCitiesBR } from '../../services/IbgeService'
import { InputSearch } from '../InputSearch'
import { getTemperature } from './../../services/WeatherService';
import useLocation from '../../hooks/useLocation';

export const Home = () => {
  const [optionsCities, setOptionsCities] = React.useState([])

  const [selectedOption, setSelectedOption] = React.useState('');

  const { position, city } = useLocation()
  console.log(position, city)

  const handleChangeInputSearch = async (selectedOption) => {
    setSelectedOption(selectedOption);
    // console.log(await getTemperature(selectedOption.value))
  };


  const getCitiesTransformOptions = async() => {
    const cities = await getCitiesBR()
    return cities.map(item => ({ value: item.nome, label: item.nome }))
  }

  React.useEffect(() => {
    getCitiesTransformOptions().then(result => setOptionsCities(result))
  },[])

  return (
    <div>
      <div className={styles.containerInputSearch}>
      <h1>Deseja ver a temperatura de qual cidade?</h1>
      <InputSearch
        options={optionsCities}
        value={selectedOption}
        onChange={handleChangeInputSearch}
      />
      </div>
      <p>Cidade selecionada: {selectedOption?.value}</p>


    </div>
  )
}
