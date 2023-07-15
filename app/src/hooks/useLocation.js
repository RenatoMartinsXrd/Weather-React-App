import React from "react";
import { getReverseGeocode } from "../services/WeatherService";
import { getLocationFromIp } from "../services/IpService";
const useLocation = () => {
  const [position, setPosition] = React.useState('');
  const [city, setCity] = React.useState('');

  const getCityFromCoords = async(data) => {
    const {latitude, longitude} = data
    const responseReverseGeocode = await getReverseGeocode(latitude, longitude)
    setCity(responseReverseGeocode[0].name)

    return responseReverseGeocode
  };

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };


  React.useEffect(() => {

    const getLocation = async () => {
      try {
        const responseCurrentPosition = await getCurrentPosition()
        setPosition(responseCurrentPosition);
        getCityFromCoords(responseCurrentPosition.coords)

      }catch(error){
        const responseLocationFromIp = await getLocationFromIp()
        getCityFromCoords(responseLocationFromIp)
      }
    }

    getLocation()

  }, [])

  return { position, city}

}

export default useLocation;
