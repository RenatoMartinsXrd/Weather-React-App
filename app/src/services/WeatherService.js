import axios from 'axios';

const API_URL = 'https://api.openweathermap.org';
const API_KEY = '2c82ca99bb2ad8fdd20ef502792efde5';

export const getTemperature = async (city) => {
  try {
    const response = await axios.get(`${API_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter a temperatura:', error);
    throw error;
  }
};

export const getReverseGeocode = async (latitude, longitude) => {
  try {
    const response = await axios.get(`${API_URL}/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter a localização', error);
    throw error;
  }
};
