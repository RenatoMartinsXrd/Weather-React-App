import axios from 'axios';

export const getLocationFromIp = async () => {
  try {
    const response = await axios.get(`https://ip.nf/me.json`);
    const { ip } = response.data
    return ip;
  } catch (error) {
    console.error('Erro ao obter a localização via IP:', error);
    throw error;
  }
};
