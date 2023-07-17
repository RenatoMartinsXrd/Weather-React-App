import React from 'react';
import styles from './CardWeather.module.css';

export const CardWeather = ({ day = '', city, temperature, state }) => {
  const cardClasses = `${styles.card}`;
  const isDataAvailable = day && city && temperature;

  return (
    <div className={cardClasses}>
      {isDataAvailable ? (
        <div className={styles.containerContent}>
          <h2 className={styles.textDay}>{day}</h2>
          <h2 className={styles.textCity}>{city}, <span className={styles.pinto}>{state}</span></h2>
          <h1 className={styles.textTemperature}>{temperature}°</h1>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};
