import React from 'react';
import styles from './KitchenAccessorysSliderComponent.module.css';

const KitchenAccessorysSliderBaseComponent = ({ image, make }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt='/' />
      <p>{make}</p>
    </div>
  );
}

export default KitchenAccessorysSliderBaseComponent;
