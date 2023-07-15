import axios from 'axios';
const API_URL = 'https://servicodados.ibge.gov.br/api/v1'

export const getStatesBR = async () => {
  try {
    const response = await axios.get(`${API_URL}/localidades/estados`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os estados:', error);
    throw error;
  }
};

export const getCitiesBR = async () => {
  try {
    const response = await axios.get(`${API_URL}/localidades/municipios?orderBy=nome`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter as cidades', error);
    throw error;
  }
};
