import React from 'react'
import styles from './Home.module.css'
import { getCitiesBR } from '../../services/IbgeService'
import { InputSearch } from '../InputSearch'
import { getTemperature } from './../../services/WeatherService';
import useLocation from '../../hooks/useLocation';
import { CardWeather } from '../CardWeather';

export const Home = () => {
  const { city, state } = useLocation()

  const [optionsCities, setOptionsCities] = React.useState([])

  const [selectedOption, setSelectedOption] = React.useState('');

  const [infoWeather, setinfoWeather] = React.useState({
    temperature: '',
    city: '',
    day: 'Hoje',
    state: ''
  });

  const updateInfoWeatherWithTemperature = async (city, state) => {
    try{
      const result = await getTemperature(city);
      const { main: { temp } } = result;
      setinfoWeather(prevInfoWeather => ({ ...prevInfoWeather, temperature: temp, city, state }));
    }catch(error) {
      alert("Infelizmente não encontramos informações para sua cidade, por favor tente informar uma outra cidade mais próxima")
      setSelectedOption(null)
    }
  };


  const handleChangeInputSearch = async (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  React.useEffect(()=>{
    if (city && state) {
      updateInfoWeatherWithTemperature(city, state);
    }
  }, [city,state])

  React.useEffect(()=>{
    if (selectedOption) {
      updateInfoWeatherWithTemperature(selectedOption.label, selectedOption.state);
    }
  }, [selectedOption])

  const getCitiesTransformOptions = async() => {
    const cities = await getCitiesBR()
    return cities.map(item => ({ value: item.nome, label: item.nome, state: item?.microrregiao?.mesorregiao?.UF?.nome }))
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

      <div className={styles.containerCards}>
        <CardWeather
          day='Agora'
          city={infoWeather?.city}
          temperature={infoWeather?.temperature}
          state={infoWeather?.state}
        />
      </div>

      </div>

    </div>
  )
}
