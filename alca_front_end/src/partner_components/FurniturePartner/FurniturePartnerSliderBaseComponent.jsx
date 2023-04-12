import React from 'react';
import styles from './FurniturePartnerSliderComponent.module.css';

const FurniturePartnerSliderBaseComponent = ({ image, make }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt='/' />
      <p>{make}</p>
    </div>
  );
};

export default FurniturePartnerSliderBaseComponent;